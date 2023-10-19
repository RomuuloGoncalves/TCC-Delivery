<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

use App\Models\Pedido;
use App\Models\PedidoProduto;

class DashboardController extends Controller
{
    /**
     * historico
     *
     * @return Pedido[]
     */

    public function help()
    {
        $pedidos = Pedido::all();

        // foreach ($pedidos as $pedido) {
        //     $pedido->pedido_produtos = PedidoProduto::with('produto')->where('cod_pedido', $pedido->id)->get();
        // }

        return response()->json($pedidos, 200);
    }

    public function rendimento_semanal()
    {
        $startDate = Carbon::now()->startOfWeek();
        $endDate = Carbon::now()->endOfWeek();

        $lastWeekStartDate = $startDate->copy()->subWeek()->startOfWeek();
        $lastWeekEndDate = $startDate->copy()->subWeek()->endOfWeek();

        $pedidos = Pedido::whereBetween('created_at', [$startDate, $endDate])->get();

        $rendimentoPorDia = [];
        $rendimentoTotalSemanaAtual = 0;

        for ($day = 0; $day < 7; $day++) {
            $rendimentoPorDia[$day] = 0;
        }

        foreach ($pedidos as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $dayOfWeek = $dataPedido->dayOfWeek;
            $rendimentoPorDia[$dayOfWeek] += floatval($pedido->valor_total);
            $rendimentoTotalSemanaAtual += floatval($pedido->valor_total);
        }

        // Rendimento semana passada
        $pedidosLastWeek = Pedido::whereBetween('created_at', [$lastWeekStartDate, $lastWeekEndDate])->get();

        $rendimentoPorDiaLastWeek = [];
        $rendimentoTotalSemanaPassada = 0;

        for ($day = 0; $day < 7; $day++) {
            $rendimentoPorDiaLastWeek[$day] = 0;
        }

        foreach ($pedidosLastWeek as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $dayOfWeek = $dataPedido->dayOfWeek;
            $rendimentoPorDiaLastWeek[$dayOfWeek] += floatval($pedido->valor_total);
            $rendimentoTotalSemanaPassada += floatval($pedido->valor_total);
        }

        // Calcula o lucro comparando os rendimentos da semana atual e da semana passada
        $lucro = 0;
        for ($day = 0; $day < 7; $day++) {
            $lucro += $rendimentoPorDia[$day] - $rendimentoPorDiaLastWeek[$day];
        }

        return response()->json([
            'pedidos' => $pedidos,
            'dias' => $rendimentoPorDia,
            'semanaPassada_vs_semanaAtual' => $lucro,
            'semanaPassada' => $rendimentoPorDiaLastWeek,
            'rendimentoPassado' => $rendimentoTotalSemanaPassada,
            'rendimentoAtual' => $rendimentoTotalSemanaAtual,
        ], 200);
    }

    public function rendimento_mensal()
    {
        $currentDate = Carbon::now();
        $firstDayOfMonth = $currentDate->copy()->startOfMonth();
        $lastDayOfMonth = $currentDate->copy()->endOfMonth();
        $currentWeek = $firstDayOfMonth->copy()->startOfWeek();

        $rendimentoPorSemana = [];

        while ($currentWeek <= $lastDayOfMonth) {
            $weekStartDate = $currentWeek->copy();
            $weekEndDate = $currentWeek->copy()->endOfWeek();

            $pedidos = Pedido::whereBetween('created_at', [
                $weekStartDate,
                $weekEndDate
            ])->get();

            $rendimentoSemana = 0;

            foreach ($pedidos as $pedido) {
                foreach ($pedido->pedido_produtos as $produto) {
                    $rendimentoSemana += floatval($produto->produto->valor_total);
                }
            }

            $rendimentoPorSemana[$currentWeek->format('Y-m-d')] = $rendimentoSemana;

            // Avança para a próxima semana
            $currentWeek->addWeek();
        }

        return response()->json($rendimentoPorSemana, 200);
    }

    public function rendimento_anual()
    {
        $startDate = Carbon::now()->startOfYear();
        $endDate = Carbon::now()->endOfYear();

        $pedidos = Pedido::whereBetween('created_at', [$startDate, $endDate])->get();

        $rendimentoPorMes = [];

        // Inicializa o array com todos os meses com valor 0
        $allMonths = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ];

        foreach ($allMonths as $mes) {
            $rendimentoPorMes[$mes] = 0;
        }

        foreach ($pedidos as $pedido) {
            foreach ($pedido->pedido_produtos as $produto) {
                $dataPedido = Carbon::parse($pedido->created_at);
                $mes = $dataPedido->format('F'); // Obtenha o nome do mês

                // Apenas atualize se houver rendimento
                if (isset($rendimentoPorMes[$mes])) {
                    $rendimentoPorMes[$mes] += floatval($produto->produto->valor_total);
                }
            }
        }

        return response()->json($rendimentoPorMes, 200);
    }
}
