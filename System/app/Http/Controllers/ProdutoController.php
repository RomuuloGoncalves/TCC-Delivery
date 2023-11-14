<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProdutoController extends Controller
{

    public function __construct()
    {
    }

    /**
     * index
     *
     * @return Produto[]
     */

    public function index()
    {
        $produtos = Produto::with('categoria')->get();

        $produtosComImagens = $produtos->map(function ($produto) {
            $produto->imagem = $produto->imagem ? $produto->imagem : null;

            return $produto;
        });

        return response()->json($produtosComImagens, 200);
    }

    /**
     * store
     *
     * @return Produto
     */

    public function store(Request $request)
    {
        $produto = new Produto;
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'descricao' => ['required', 'string', 'max:500'],
            'imagem' => ['nullable'],
            'cod_categoria' => ['required', 'integer', 'exists:Categorias,id', 'max_digits:30'],
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        if ($request->hasFile('imagem')) {
            try {
                $nomeCompletoImagem = $request->file('imagem')->getClientOriginalName();
                $apenasNome = pathinfo($nomeCompletoImagem, PATHINFO_FILENAME);
                $extensao = $request->file('imagem')->getClientOriginalExtension();
                $nomeFinal = str_replace(' ', '_', $apenasNome) . '-' . rand() . '_' . time() . '.' . $extensao;

                $caminho = base_path('public/uploads');
                if (!file_exists($caminho)) {
                    mkdir($caminho, 0755, true);
                }

                $request->file('imagem')->move($caminho, $nomeFinal);
            } catch (\Exception $e) {
                return response()->json(['error' => $e->getMessage()], 500);
            }
        } else {
            $nomeFinal = null;
        }


        $produto = Produto::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'imagem' => $nomeFinal,
            'cod_categoria' => $request->input('cod_categoria'),
        ]);

        return response()->json($produto, 201);
    }

    /**
     * update
     *
     * @return Produto
     */

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'max_digits:30'],
            'nome' => ['nullable', 'string', 'max:255'],
            'descricao' => ['nullable', 'string', 'min:1', 'max:500'],
            'imagem' => ['nullable', 'string', 'max:500'],
            'cod_categoria' => ['nullable', 'integer', 'max_digits:30']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if ($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $produto = Produto::find($request->input('id'));
        $atributos = ['nome', 'descricao', 'image', 'cod_categoria'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $produto->$atributo = $request->input($atributo)
                : null;
        }

        $produto->save();

        return response()->json($produto, 200);
    }

    /**
     * show
     *
     * @return Produto
     */

    public function show(int $id)
    {
        $produto = Produto::with(['categoria', 'grupo_variacao.variacao'])->where('id', $id)->find($id);
        $produto->imagem = $produto->imagem ? $produto->imagem : null;

        if (!$produto)
            return response()->json(['mensage' => 'Produto não encontrado'], 404);

        return response()->json($produto, 200);
    }

    /**
     * destroy
     *
     * @return void
     */

    public function destroy(int $id)
    {
        $produto = Produto::find($id);

        if (!$produto)
            return response()->json(['message' => 'Produto inválido'], 422);

        $produto::find($id)->delete();
        return response()->json(['message' => 'Produto deletado com sucesso'], 204);
    }
}
