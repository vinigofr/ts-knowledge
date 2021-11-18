// O arquivo tsconfig.json é de suma importância porquê é um norte
// que o compilador ts usará para transpilar o código.

// Exemplo de código tsconfig.json
const tsConfig = {
  compilerOptions: {
    target: "es5",
    module: "commonjs",
    outDir: "./dist",
    sourceMap: true,
    strict: true,
  },
  include: ["src"]
}