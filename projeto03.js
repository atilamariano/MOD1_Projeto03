console.clear();
const prompt = require("prompt-sync")();

console.log(`              Seja bem-vindo ao reino de Artêmia.

  Aqui é onde sua jornada começa, você é um bravo guerreiro
em busca de aventuras e grandes batalhas.

  Nessa jornada você irar lutar contra monstros aterrorizantes e 
ganhar experiência ficando mais forte a cada luta, mas lembrete
você como todos, não é imortal precisa descansar e se sua vida chegar
a 0 o jogo termina, você perde todo o seu processo começando tudo 
do incio.

  Na cidade esta tendo varios desaparecimentos, é o seu 
dever descubrir o motivo e dar um fim na causa.

  Dito isto desejo uma boa aventura e muita sabedoria 
na sua jornada jovem mestre.`);
console.log();

// Inicio do jogo.
do {
  var res3;
  let nome = prompt(`Diga-me o seu nome nobre Cavaleiro `); //Nome do Player.
  console.log();

  let hero = {
    //Estatos do player.
    stats: {
      Nome: nome,
      Level: 1,
      Life: 100,
      Staminas: 100,
      Attack: 10,
      Defesa: 3,
      key: "",
    },

    //; Dodos do monstro
    NameMonster: "",
    LifeMonster: 1,
    AttackMonster: 1,
    DefesaMonster: 1,

    // Função para o monstro.
    Monster: function (nome, Life, Attack, Defende, boss) {
      this.NameMonster = nome;
      this.LifeMonster = Life;
      this.AttackMonster = Attack;
      this.DefesaMonster = Defende;
      this.hpBoss = boss;
    },

    //Calendário
    Periodo: "Manhã",
    Hora: 6,
    Dia: 1,
    Dia2: 1,
    weekdays: [
      "",
      "Domingo",
      "Segunda-Feira",
      "Terça-feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sabado",
    ],

    // Umentando levele e estatos do Player.
    increaseLevel: function () {
      this.stats.Level += 1;
      this.stats.Life += 10;
      this.stats.Staminas += 1;
      this.stats.Attack += 1;
    },

    //Função para restaurar o HP
    restore: function () {
      this.stats.Staminas = 100;
      this.stats.Life = 100;
      this.stats.Life += this.stats.Level * 10;
      this.stats.Staminas += this.stats.Level;
    },

    //Função para batalha.
    battle: function () {
      do {
        console.clear();
        hero.Time(2);

        // Inicio da batalha.
        let res0 = prompt("A batalha ira começar! Aperte ENTER");
        console.log();

        while (res0 != "") {
          res0 = prompt("A batalha ira começar! Aperte ENTER");
          console.log();
        }

        console.log(`Mostro, ${this.NameMonster}`);
        if (this.hpBoss > this.LifeMonster) {
          this.LifeMonster = this.hpBoss;
        }
        console.log(`Vida, ${this.LifeMonster}`);
        console.log(`Ataque, ${this.AttackMonster}`);
        console.log(`Defesa, ${this.DefesaMonster}`);
        console.log();

        // Condição de sorte para ataque e esquiva.
        let DicePlayer = Math.floor(Math.random() * 2) + 1;
        let DiceMonster = Math.floor(Math.random() * 2) + 1;

        if (DicePlayer == 1) {
          this.LifeMonster += this.DefesaMonster - this.stats.Attack;
          this.hpBoss += this.DefesaMonster - this.stats.Attack;
          console.log(
            `${this.stats.Nome} foi para cima de ${this.NameMonster} para atacar.`
          );
          console.log(`${this.stats.Nome} acertou o seu ataque.
             ${this.NameMonster} está com ${this.LifeMonster} de vida`);
          this.stats.Staminas -= 2;
        } else if (DicePlayer == 2) {
          console.log(
            `${this.stats.Nome} foi para cima de ${this.NameMonster} para atacar.`
          );
          console.log(`${this.NameMonster} desviou do seu ataque`);
          this.stats.Staminas -= 2;
        }
        console.log();

        while (true) {
          if (this.LifeMonster <= 0) {
            break;
          }

          if (DiceMonster == 1) {
            this.stats.Life += this.stats.Defesa - this.AttackMonster;
            console.log(
              `${this.NameMonster} partiu para cima de ${this.stats.Nome} para atacar.`
            );
            console.log(`${this.NameMonster} acertou seu ataque.
             ${this.stats.Nome} recebeu ${this.AttackMonster}, - ${this.stats.Defesa} de sua defesa.
             Sua vida está em ${this.stats.Life}.`);
          } else if (DiceMonster == 2) {
            console.log(
              `${this.NameMonster} partiu para cima ${this.stats.Nome} para atacar.`
            );
            console.log();
            console.log(`${this.stats.Nome} desviou do ataque.`);
          }
          break;
        }
        console.log();

        //Condição para a morte
        if (this.stats.Life <= 0) {
          this.stats.Life = 0;
          console.log(`Sua vida chegou a 0, 
      
       END OF THE GAME`);
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();

          while (res3 != "sim" && res3 != "nao") {
            res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
            console.log();
          }
          break;
        } else if (this.stats.Staminas <= 0) {
          console.log(`Sua resistência chegou a 0, 
      
       END OF THE GAME`);
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
          console.log();

          while (res3 != "sim" && res3 != "nao") {
            res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
            console.log();
          }
          break;
        }

        if (this.LifeMonster <= 0) {
          this.LifeMonster = 0;
          console.log(
            `${this.stats.Nome} você derrotou ${this.NameMonster} VITORIA!`
          );
          console.log();
          console.log(`Parabéns Você passou de level`);
          hero.increaseLevel();
          hero.displayStatus();
          let res2 = prompt("Aperte ENTER para prosseguir");

          while (res2 != "") {
            console.log();
            res2 = prompt("Aperte ENTER para prosseguir");
          }
        }

        hero.displayStatus();
        res1 = prompt(
          "Ainda deseja continuar com a batalha, Sim ou Não? "
        ).toLowerCase();
        console.log();

        if (res1 == "nao") {
          console.log(
            `${this.stats.Nome} fugio da batalha, não obteve ganhos.`
          );

          let res = prompt("Aperte ENTER para prosseguir");

          while (res != "") {
            console.log();
            console.log("Resposta inavila");
            console.log();
            res = prompt("Aperte ENTER para prosseguir");
          }
        }

        while (res1 != "sim" && res1 != "nao") {
          console.log("Resposta invalida");
          console.log();
          res1 = prompt(
            "Ainda deseja continuar com a batalha, Sim ou Não? "
          ).toLowerCase();
          console.log();
        }
      } while (res1 == "sim");
    },

    // função para alterar dias e horas
    Time: function (horas) {
      this.Hora += horas;
      if (this.Hora >= 24) {
        this.Hora -= 24;
        this.Dia++;
        this.Dia2++;
      }

      if (this.Dia2 == 8) {
        this.Dia2 -= 7;
      }

      //Acrescentando horas e mudança de turnos.
      if (this.Hora >= 19) {
        this.Periodo = "Noite";
      } else if (this.Hora >= 12) {
        this.Periodo = "Tarde";
      } else if (this.Hora >= 6) {
        this.Periodo = "Manhã";
      } else {
        this.Periodo = "Madrugada";
      }
    },

    // Território do Gamer.
    artemia: function () {
      console.clear();
      hero.displayShift();
      console.log();
      hero.displayStatus();

      console.log();
      console.log("Você agora está na Cidade de Artêmia");
      console.log();
      console.log("1, Bar do Percival");
      console.log(`2, Hospedagem do Jhol`);
      console.log(`3, Bosque Místico`);
      console.log("4, Cemitério");
      console.log();
      res4 = +prompt("Escolha uma opção ");

      while (isNaN(res4) || res4 == "" || res4 > 4 || res4 < 1) {
        console.log();
        console.log("Resposta inavila");
        res4 = +prompt("Escolha uma opção ");
        console.log();
      }

      if (res4 == 1) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        hero.barPercival();
      } else if (res4 == 2) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        hero.hospedagem();
      } else if (res4 == 3) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        hero.bosqueMistico();
      } else if (res4 == 4) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        hero.cemiterio();
      }

      if (this.stats.Staminas <= 0) {
        console.log(`Sua resistência chegou a 0, 
    
     END OF THE GAME`);
        console.log();
        res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        console.log();

        while (res3 != "sim" && res3 != "nao") {
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        }
      }
    },

    barPercival: function () {
      console.clear();
      hero.displayShift();
      console.log();
      hero.displayStatus();

      console.log("Você agora está no Bar do Percival");
      console.log();
      console.log("1, Falar com o Percival");
      console.log("2, Falar com o Caçador Bill");
      console.log("3, Falar com o Bebado jhou");
      console.log("0, Voltar para Artêmia");
      console.log();
      let res1 = prompt("Escolha uma opção ");
      console.log();

      while ((isNaN(res1) && res1 == "") || res1 > 3 || res1 < 0) {
        console.log();
        console.log("Resposta inavila");
        res1 = prompt("Escolha uma opção ");
        console.log();
      }

      if (res1 == 1) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        console.log("Seja bem vindo! aqui a comida é boa e a bebida e forte");
        console.log();
        console.log(
          "Sei que não veio aqui para bebedeiras, em que posso ser ultil?"
        );
        console.log();
        console.log(`1, Sabe algos sobre os desaparecimentos?
      2, Viu alguém estranho?`);

        let res2 = prompt("");

        while (isNaN(res2) || res2 == "" || res2 > 2 || res2 < 1) {
          console.log();
          console.log("Resposta inavila");
          res2 = prompt("Escolha uma opção ");
          console.log();
        }

        if (res2 == 1) {
          hero.Time(2);
          this.stats.Staminas -= 5;
          console.log("So oque todos sabem, pessoas some a noite");

          let res = prompt("Aperte ENTER para prosseguir");

          while (res != "") {
            console.log();
            console.log("Resposta inavila");
            res = prompt("Escolha uma opção ");
            console.log();
          }
          hero.barPercival();
        } else if (res2 == 2) {
          hero.Time(2);
          this.stats.Staminas -= 5;
          console.log("Aqui sempre vem pessoas diferentes.");

          let res = prompt("Aperte ENTER para prosseguir");

          while (res != "") {
            console.log();
            console.log("Resposta inavila");
            res = prompt("Escolha uma opção ");
            console.log();
          }

          hero.barPercival();
        }
      } else if (res1 == 2) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        console.log(` Ola sou Bill o caçador, ouvi dizer que está
     investigando os desaparecimentos, é bom que resolva logo isso.
       Durante o dia não tem muita caça boa.`);
        console.log();

        let res3 = prompt("Aperte ENTER para prosseguir");

        while (res3 != "") {
          console.log();
          console.log("Resposta inavila");
          res3 = prompt("Escolha uma opção ");
          console.log();
        }

        hero.barPercival();
      } else if (res1 == 3) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        console.log(`Eu vi no cemiterio um....RICKOOO...
      ele era grande...RICKOOO... tarde da noit...ZZzzZZ...`);

        let res4 = prompt("Aperte ENTER para prosseguir");

        while (res4 != "") {
          console.log();
          console.log("Resposta inavila");
          res4 = prompt("Escolha uma opção ");
          console.log();
        }
        hero.barPercival();
      } else if (res1 == 0) {
        hero.Time(2);
        this.stats.Staminas -= 5;
        hero.artemia();
      }

      if (this.stats.Staminas <= 0) {
        console.log(`Sua resistência chegou a 0, 
    
     END OF THE GAME`);
        console.log();
        res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        console.log();

        while (res3 != "sim" && res3 != "nao") {
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        }
      }
    },

    hospedagem: function () {
      console.clear();
      hero.displayShift();
      console.log();
      hero.displayStatus();

      console.log("Hospedagem do Jhou");
      console.log();
      console.log(`Ola jovem Mestre!
   Aqui você pode descansar e recuperar todas as suas forças`);
      console.log();
      console.log("1, Descansar");
      console.log("0, Voltar para Artêmia");
      console.log();
      res6 = prompt("Escolha uma opção ");

      while (isNaN(res6) || res6 == "" || res6 > 1 || res6 < 0) {
        console.log();
        console.log("Resposta inavila");
        res6 = prompt("Escolha uma opção ");
        console.log();
      }

      if (res6 == 1) {
        hero.restore();
        hero.Time(12);
        hero.hospedagem();
      } else if (res6 == 0) {
        hero.artemia();
      }
    },

    bosqueMistico: function () {
      console.clear();
      hero.displayShift();
      console.log();
      hero.displayStatus();

      console.log("Você está na Bosque Místico");
      console.log();
      console.log("1, Explorar");
      console.log("2, Caçar");
      console.log("0, Voltar para Artêmia");
      console.log();
      res7 = prompt("Escolha uma opção ");
      console.log();

      while (isNaN(res7) || res7 == "" || res7 > 2 || res7 < 0) {
        console.log();
        console.log("Resposta inavila");
        res7 = prompt("Escolha uma opção ");
        console.log();
      }

      if (res7 == 1) {
        hero.Time(2);
        console.log(`Andando pelo bosque você ouvi um barulho.
        A mata começa a se quebrar, está vindo algo em sua direção.
        
        PREPARECE ! 
        
        Aparece um GOBLIM na sua frente.`);

        let res = prompt("Aperte ENTER para prosseguir");

        while (res != "") {
          console.log();
          console.log("Resposta inavila");
          console.log();
          res = prompt("Aperte ENTER para prosseguir");
        }

        hero.Monster("Goblim", 80, 10, 3);
        hero.battle();
        hero.bosqueMistico();
      } else if (
        (res7 == 2 && this.Periodo == "Manhã") ||
        this.Periodo == "Tarde"
      ) {
        hero.Time(2);
        console.log(`${this.stats.Nome} entra de mata adentro e ouvi uivos
      quando se depara com um Lobo feroz.
      
      PREPARECE !`);
        console.log();
        let res = prompt("Aperte ENTER para prosseguir");

        while (res != "") {
          console.log();
          console.log("Resposta inavila");
          console.log();
          res = prompt("Aperte ENTER para prosseguir");
        }
        hero.Monster("Lobo", 50, 6, 2);
        hero.battle();
        hero.bosqueMistico();
      } else if (
        (res7 == 2 && this.Periodo == "Noite") ||
        this.Periodo == "Madrugada"
      ) {
        hero.Time(2);
        console.log(`${this.stats.Nome} entra de mata adentro,
       em uma noite de lua Cheia, quando se depara com uma figura aterrorizante,
       es que é um Lobisomem.
      
        Com muita sede de sangue, es em sua frente o motivo dos desaparecimentos.
        Sua missão agora é salvar toda à Artêmia, lute contra a fera demoníaca
       e nos liberte dessa maldição.

      
      PREPARECE !`);

        let res = prompt("Aperte ENTER para prosseguir");

        while (res != "") {
          console.log();
          console.log("Resposta inavila");
          console.log();
          res = prompt("Aperte ENTER para prosseguir");
        }

        hero.Monster("Lobisomem", 1, 15, 3, 130);
        hero.battle();

        if (this.stats.Life > 0) {
          hero.bosqueMistico();
        }

        if (this.hpBoss == 0) {
          console.log(`Artêmia será eternamente grata ao senhor Jovem mestre.
          Sempre sera bem vindo em nossa terra.`);
          res3 = "nao";
        }
      } else if (res7 == 0) {
        hero.Time(2);
        hero.artemia();
      }

      if (this.stats.Staminas <= 0) {
        console.log(`Sua resistência chegou a 0, 
    
     END OF THE GAME`);
        console.log();
        res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        console.log();

        while (res3 != "sim" && res3 != "nao") {
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        }
      }
    },

    cemiterio: function () {
      if (
        this.Periodo == "Noite" ||
        this.Periodo == "Madrugada" ||
        this.key == "Chave Antiga"
      ) {
        console.clear();
        hero.displayShift();
        console.log();
        hero.displayStatus();
        console.log();
        console.log("Você está no cemitério");
        console.log();
        console.log("1, Explorar");
        console.log("2, Visitar Mausoléu do antigo rei");
        console.log("0, Voltar para Artêmia");

        if (this.Periodo == "Madrugada") {
          hero.Time(2);
          console.log("3, Ir no mausoléu");
        }

        console.log();
        let res8 = prompt("Escolha uma opção ");
        console.log();

        while (isNaN(res8) || res8 == "" || res8 > 3 || res8 < 0) {
          console.log();
          console.log("Resposta inavila");
          res8 = prompt("Escolha uma opção ");
          console.log();
        }

        if (res8 == 1) {
          hero.Time(2);
          console.log(`Você está caminhado entre as catacumbas,
           sente um arrepio friu na espinha, vem a senssação que sua vida vai 
           acabar ali mesmo, e em um tumba ver algo brilhando.`);
          console.log();
          console.log(`que deseja fazer?
           1, Ir embora para Artêmia.
           2, investigar o objeto`);

          let res = prompt("Digite uma das opções ");

          while (res < 1 || res > 2) {
            console.log();
            console.log("Resposta inavila");
            console.log();
            res = prompt("Digite uma das opções ");
          }

          if (res == 1) {
            hero.Time(2);
            hero.artemia();
          } else if (res == 2 && this.stats.key == "") {
            console.log(`Voce encontrou 'CHAVE DO MAUSOLÉU`);
            this.stats.key = "Chave Antiga";
            hero.displayStatus();

            let res = prompt("Aperte ENTER para prosseguir");

            while (res != "") {
              console.log();
              console.log("Resposta invalida");
              console.log();
              res = prompt("Aperte ENTER para prosseguir");
            }
            hero.cemiterio();
          } else {
            hero.cemiterio();
          }
        } else if (res8 == 2) {
          hero.Time(2);
          console.log(`Aqui Jas um grande Rei
          que deu a sua vida para salvar um Reino de 
          Artêmia de um poderoso necromante.
          Pagando com sua propria vida.
          
          Todos lembraremos do seu nome 'Alexander'.`);

          let res = prompt("Aperte ENTER para prosseguir");

          while (res != "") {
            console.log();
            console.log("Resposta inavila");
            console.log();
            res = prompt("Aperte ENTER para prosseguir");
          }

          hero.cemiterio();
        } else if (res8 == 0) {
          hero.artemia();
        } else if (
          res8 == 3 &&
          this.stats.key == "Chave Antiga" &&
          this.Periodo == "Madrugada"
        ) {
          console.log(`Chegando no mausoléu, seu instintos avisam a todo momento
            que a um grande mau la dentro, oque deseja fazer ?  `);
          console.log();
          console.log(`1, Entrar no mausoléu.
            2, voltar para Artêmia.`);

          let res = prompt("Digite uma das opções ");

          while (res < 1 || res > 2) {
            console.log();
            console.log("Resposta inavila");
            console.log();
            res = prompt("Digite uma das opções ");
          }

          if (res == 1) {
            console.log(`Ao entrar, bem la no fundo você avista uma sala
             dentro dela tem uma escadaria, a cada passo que vc da
             sente que pode ser o seu ultimo`);
            console.log();
            console.log(`Você ouvi uma voz estridente falando"
             
             "HOJE SERÁ SEU ULTIMO DIA CAVALEIRO, CONHEÇA A MORTE!!!
             
             PREPARECE!`);

            console.log(`O Lith está vindo em sua direção.`);

            let res = prompt("Aperte ENTER para prosseguir");

            while (res != "") {
              console.log();
              console.log("Resposta invalida");
              console.log();
              res = prompt("Aperte ENTER para prosseguir");
            }

            hero.Monster("Lith Ancião", 1, 15, 3, 150);
            hero.battle();

            if (this.stats.Life > 0) {
              hero.cemiterio();
            }

            if (this.hpBoss == 0) {
              console.log(`Artêmia será eternamente grata ao senhor Jovem mestre.
              Sempre sera bem vindo em nossa terra.`);
            }
          } else if (res == 2) {
            hero.artemia();
          }
        } else {
          console.log(`Precisa da chave para entrar.`);

          let res = prompt("Aperte ENTER para prosseguir");

          while (res != "") {
            console.log();
            console.log("Resposta invalida");
            console.log();
            res = prompt("Aperte ENTER para prosseguir");
          }
          hero.cemiterio();
        }
      } else if (this.stats.Life > 0) {
        console.log("O cemiterio está fechado, abrirá logo mais a noite.");
        let res = prompt("Aperte ENTER para voltar à Artêmia ");

        while (res != "") {
          console.log();
          res = prompt("Aperte ENTER para voltar a Artêmia ");
        }
        hero.Time(2);
        hero.artemia();
      }

      if (this.stats.Staminas <= 0) {
        console.log(`Sua resistência chegou a 0, 
    
     END OF THE GAME`);
        console.log();
        res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        console.log();

        while (res3 != "sim" && res3 != "nao") {
          console.log();
          res3 = prompt("Deseja jogar novamente, Sim ou Não? ").toLowerCase();
        }
      }
    },

    //Exibi calendário, hora e período do dia.
    displayShift: function () {
      console.log(`    Hoje é ${this.weekdays[this.Dia2]}
    As ${this.Hora}:00 Horas da ${this.Periodo}, dia ${this.Dia}`);
    },

    // Exibir estatos do Player.
    displayStatus: function () {
      console.table(this.stats);
    },
  };

  hero.artemia();

  // Resetando o Gamer.
} while (res3 == "sim");
console.log();

console.log(`Agradeço a Deus primeiramente e também a todos que participaram e
 me ajudaram no meu crecimento ate aqui`);
console.log();
