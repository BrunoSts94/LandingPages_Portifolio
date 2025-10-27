//Em projetos com "type": "module", as variáveis globais __dirname e __filename não existem mais por padrão no Node.js.
// Então devemos recriar manualmente o __dirname usando fileURLToPath(import.meta.url) e path.dirname().

import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin';   

const __filename = fileURLToPath(import.meta.url);  //
const __dirname = path.dirname(__filename);

export default {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3001,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        favicon: path.resolve('src', 'assets', 'scissors.svg')
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets'),
                    to: path.resolve(__dirname, 'dist', 'src', 'assets')
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}