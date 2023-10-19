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
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $pedidos = Pedido::whereBetween('created_at', [$startDate, $endDate])->get();

        $rendimentoPorSemana = [];
        $rendimentoTotalMesAtual = 0;

        foreach ($pedidos as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $weekOfMonth = $dataPedido->weekOfMonth - 1; // Subtrai 1 para começar com a primeira semana como '0'
            $weekKey = $weekOfMonth;

            if (!isset($rendimentoPorSemana[$weekKey])) {
                $rendimentoPorSemana[$weekKey] = 0;
            }

            $rendimentoPorSemana[$weekKey] += floatval($pedido->valor_total);
            $rendimentoTotalMesAtual += floatval($pedido->valor_total);
        }

        // Preencher semanas com valor zero
        for ($week = 0; $week <= $endDate->weekOfMonth - 1; $week++) {
            $weekKey = $week;
            if (!isset($rendimentoPorSemana[$weekKey])) {
                $rendimentoPorSemana[$weekKey] = 0;
            }
        }

        // Rendimento mês passado
        $lastMonthStartDate = $startDate->copy()->subMonth();
        $lastMonthEndDate = $lastMonthStartDate->copy()->endOfMonth();

        $pedidosLastMonth = Pedido::whereBetween('created_at', [$lastMonthStartDate, $lastMonthEndDate])->get();

        $rendimentoPorSemanaLastMonth = [];
        $rendimentoTotalMesPassado = 0;

        foreach ($pedidosLastMonth as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $weekOfMonth = $dataPedido->weekOfMonth - 1; // Subtrai 1 para começar com a primeira semana como '0'
            $weekKey = $weekOfMonth;

            if (!isset($rendimentoPorSemanaLastMonth[$weekKey])) {
                $rendimentoPorSemanaLastMonth[$weekKey] = 0;
            }

            $rendimentoPorSemanaLastMonth[$weekKey] += floatval($pedido->valor_total);
            $rendimentoTotalMesPassado += floatval($pedido->valor_total);
        }

        // Preencher semanas do mês passado com valor zero
        for ($week = 0; $week <= $lastMonthEndDate->weekOfMonth - 1; $week++) {
            $weekKey = $week;
            if (!isset($rendimentoPorSemanaLastMonth[$weekKey])) {
                $rendimentoPorSemanaLastMonth[$weekKey] = 0;
            }
        }

        // Calcula o lucro comparando os rendimentos do mês atual e do mês passado
        $lucro = 0;
        foreach ($rendimentoPorSemana as $weekKey => $rendimento) {
            if (isset($rendimentoPorSemanaLastMonth[$weekKey])) {
                $lucro += $rendimento - $rendimentoPorSemanaLastMonth[$weekKey];
            }
        }

        return response()->json([
            'pedidos' => $pedidos,
            'semanas' => $rendimentoPorSemana,
            'rendimento_total_mes_atual' => $rendimentoTotalMesAtual,
            'semanas_mes_passado' => $rendimentoPorSemanaLastMonth,
            'rendimento_total_mes_passado' => $rendimentoTotalMesPassado,
            'mesPassado_vs_mesAtual' => $lucro,
        ], 200);
    }


    public function rendimento_anual()
    {
        $startDate = Carbon::now()->startOfYear();
        $endDate = Carbon::now()->endOfYear();
    
        $pedidos = Pedido::whereBetween('created_at', [$startDate, $endDate])->get();
    
        $rendimentoPorMes = [];
        $rendimentoTotalAnoAtual = 0;
    
        foreach ($pedidos as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $month = $dataPedido->month;
    
            if (!isset($rendimentoPorMes[$month])) {
                $rendimentoPorMes[$month] = 0;
            }
    
            $rendimentoPorMes[$month] += floatval($pedido->valor_total);
            $rendimentoTotalAnoAtual += floatval($pedido->valor_total);
        }
    
        // Preencher meses com valor zero
        for ($month = 1; $month <= 12; $month++) {
            if (!isset($rendimentoPorMes[$month])) {
                $rendimentoPorMes[$month] = 0;
            }
        }
    
        // Calcula o lucro comparando os rendimentos do ano atual com o ano passado
        $lastYearStartDate = $startDate->copy()->subYear();
        $lastYearEndDate = $lastYearStartDate->copy()->endOfYear();
    
        $pedidosLastYear = Pedido::whereBetween('created_at', [$lastYearStartDate, $lastYearEndDate])->get();
    
        $rendimentoPorMesLastYear = [];
        $rendimentoTotalAnoPassado = 0;
    
        foreach ($pedidosLastYear as $pedido) {
            $dataPedido = Carbon::parse($pedido->created_at);
            $month = $dataPedido->month;
    
            if (!isset($rendimentoPorMesLastYear[$month])) {
                $rendimentoPorMesLastYear[$month] = 0;
            }
    
            $rendimentoPorMesLastYear[$month] += floatval($pedido->valor_total);
            $rendimentoTotalAnoPassado += floatval($pedido->valor_total);
        }
    
        // Preencher meses do ano passado com valor zero
        for ($month = 1; $month <= 12; $month++) {
            if (!isset($rendimentoPorMesLastYear[$month])) {
                $rendimentoPorMesLastYear[$month] = 0;
            }
        }
    
        // Calcula o lucro comparando os rendimentos do ano atual com o ano passado
        $lucro = 0;
        foreach ($rendimentoPorMes as $month => $rendimento) {
            if (isset($rendimentoPorMesLastYear[$month])) {
                $lucro += $rendimento - $rendimentoPorMesLastYear[$month];
            }
        }
    
        return response()->json([
            'pedidos' => $pedidos,
            'meses' => $rendimentoPorMes,
            'rendimento_total_ano_atual' => $rendimentoTotalAnoAtual,
            'meses_ano_passado' => $rendimentoPorMesLastYear,
            'rendimento_total_ano_passado' => $rendimentoTotalAnoPassado,
            'anoPassado_vs_anoAtual' => $lucro,
        ], 200);
    }
    
    
}
