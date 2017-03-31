# lab-pw-2017-1-a1

Laboratório da turma de Programação para Web.

## Para rodar o projeto

### Para fazer clone.

`git clone https://github.com/RenatoOAAguiar/lab-pw-2017-1-a1`

### Para rodar com o Tomcat.

`mvnw org.apache.tomcat.maven:tomcat7-maven-plugin:run`

No Linux, use `./mvnw` ao invés de apenas `mvnw`, como no Windows. Além disso, pelo menos uma vez, é preciso dar permissão de execução ao arquivo de script **mvnw** com o comando `chmod +x mvnw`.

## Para acessar a aplicação

`http://localhost:8080/lab-pw-2017-1-a1`

### Para "empacotar" a aplicação.

`mvnw package`

## Para "preparar" o projeto

### Para "embutir" o Maven no projeto.

### Código já possui o maven integrado, mas caso seja necessário ser feito
### utilizar o código abaixo:

`mvn io.takari:maven:0.3.3:wrapper -Dmaven=3.3.9`

# 
