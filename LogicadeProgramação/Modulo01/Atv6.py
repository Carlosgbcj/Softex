#Declarando as variaveis do programa
maiorNotaA = 0.0
maiorNotaB = 0.0
maiorNotaC = 0.0
maiorNotaD = 0.0
maiorNotaGeral = 0.0

alunoMaiorA = ""
alunoMaiorB = ""
alunoMaiorC = ""
alunoMaiorD = ""
alunoMaiorGeral = ""

qtdAprovadosA = 0
qtdAprovadosB = 0
qtdAprovadosC = 0
qtdAprovadosD = 0

print ("Programa para cadastro de notas de vestibular. Insira notas distintas por turma")
#Laço de repetição para pegar as notas e nomes dos alunos de cada turma - Turma A
for i in range(1, 6, 1) 
    print("Digite o nome do Aluno " , i , "da Turma A: " )
    alunoTemp = input()
     print("Digite o nome do Aluno " , i , "da Turma A: " )
     notaTemp = float (input())
     if notaTemp > maiorNotaA:
        maiorNotaA = notaTemp
        alunoMaiorA = alunoTemp
     if notaTemp >= 7.0:
        qtdAprovadosA += 1
     if notaTemp > maiorNotaGeral:
        maiorNotaGeral = notaTemp
        alunoMaiorGeral = alunoTemp 
#Laço de repetição para pegar as notas e nomes dos alunos de cada turma - Turma B
    alunoTemp = input()
     print("Digite o nome do Aluno " , i , "da Turma B: " )
     notaTemp = float (input())
     if notaTemp > maiorNotaB:
        maiorNotaB = notaTemp
        alunoMaiorB = alunoTemp
     if notaTemp >= 7.0:
        qtdAprovadosB += 1
     if notaTemp > maiorNotaGeral:
        maiorNotaGeral = notaTemp
        alunoMaiorGeral = alunoTemp       
#Laço de repetição para pegar as notas e nomes dos alunos de cada turma - Turma C
for i in range(1, 6, 1) 
    print("Digite o nome do Aluno " , i , "da Turma C: " )
    alunoTemp = input()
     print("Digite o nome do Aluno " , i , "da Turma C: " )
     notaTemp = float (input())
     if notaTemp > maiorNotaC:
        maiorNotaC = notaTemp
        alunoMaiorC = alunoTemp
     if notaTemp >= 7.0:
        qtdAprovadosC += 1
     if notaTemp > maiorNotaGeral:
        maiorNotaGeral = notaTemp
        alunoMaiorGeral = alunoTemp
#Laço de repetição para pegar as notas e nomes dos alunos de cada turma - Turma D
for i in range(1, 6, 1) 
    print("Digite o nome do Aluno " , i , "da Turma D: " )
    alunoTemp = input()
     print("Digite o nome do Aluno " , i , "da Turma D: " )
     notaTemp = float (input())
     if notaTemp > maiorNotaD:
        maiorNotaD = notaTemp
        alunoMaiorD = alunoTemp
     if notaTemp >= 7.0:
        qtdAprovadosD += 1
     if notaTemp > maiorNotaGeral:
        maiorNotaGeral = notaTemp
        alunoMaiorGeral = alunoTemp
#Imprimindo o resultado do Vestibular:
print("Quantidade de aprovados na Turma A: ", qtdAprovadosA)
print("Quantidade de aprovados na Turma A: ", qtdAprovadosB)
print("Quantidade de aprovados na Turma A: ", qtdAprovadosC)
print("Quantidade de aprovados na Turma A: ", qtdAprovadosD)

print("O aluno ", alunoMaiorA , "teve a maior nota da Turma A, que foi ", maiorNotaA)
print("O aluno ", alunoMaiorB , "teve a maior nota da Turma B, que foi ", maiorNotaB)
print("O aluno ", alunoMaiorC , "teve a maior nota da Turma C, que foi ", maiorNotaC)
print("O aluno ", alunoMaiorD , "teve a maior nota da Turma D, que foi ", maiorNotaD)

print(" O aluno ", alunoMaiorGeral, " teve a maior nota Geral entre todas as turmas, que foi ")
