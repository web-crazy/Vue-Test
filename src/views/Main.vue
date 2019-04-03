<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="./../assets/log.svg" />
      </div>
      <div class="controls">
        <font-awesome-icon icon="cog" />
        <font-awesome-icon icon="question-circle" />
        <div class="company-wrapper">
          <font-awesome-icon icon="building" />
          <div class="company">
            <div>Company Name</div>
            <div class="sarl">SARL / EURL</div>
          </div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="navigation">
        <div class="menu menu-header" :class="{'active' : menu == 1}">
          <div class="icon-wrapper">
            <font-awesome-icon icon="pencil-alt" />
          </div>
          <div>Immatriculation</div>
        </div>
        <div class="menu" :class="{'active' : menu == 2}">
          <div class="icon-wrapper"></div>
          <div>1. Votre Societe</div>
        </div>
      </div>

      <div class="content">
        <div class="main-wrapper">
          <div class="title">Verifiez vos informations et completez si necessaire !</div>
          <p>A la validation de ces etapes vous allez pouvoir telecharger vos status provisires qui vous permettront d'ourvrir votre compte capital.</p>
          <p>
            <span class="important">Important :</span>
            <span>
              Verifez bien toutes les informations avant de valider cette etape car vous ne pourrez pas revenir les modifier par la suite
            </span>
          </p>

          <div class="cards-container">
            <CustomCard
              color="green"
              type="Validee"
              title="Votre societe"
              description="Modifiez vos informations"
            >
              <img src="./../assets/Location.svg" />
            </CustomCard>

            <CustomCard
              color="blue"
              type="A completer"
              title="Votre Activite"
              description="Quelle sera i'activite de votre societe ?"
            >
              <img src="./../assets/setting.svg" />
            </CustomCard>

            <CustomCard
              color="red"
              type="Etape 3"
              title="Capital Social"
              description="Qui est associe dans votre societe ?"
            >
              <img src="./../assets/capital.svg" />
            </CustomCard>

            <CustomCard
              color="blue"
              type="Etape 4"
              title="Vos Dirigeants"
              description="Qui dirigera votre societe ?"
            >
              <img src="./../assets/handshake.svg" />
            </CustomCard>

            <CustomCard
              color="blue"
              type="Etape 5"
              title="Fiscalite"
              description="Comment sera imposee votre societe ?"
            >
              <img src="./../assets/fiscality.svg" />
            </CustomCard>

            <CustomCard
              color="blue"
              type="Etape 6"
              title="Vos Statuts"
              description="Apercu de vos status"
            >
              <img src="./../assets/Location.svg" />
            </CustomCard>
          </div>

          <div class="warning">
            <font-awesome-icon icon="exclamation-circle" />
            <span>Vous devez remplir chaque case et verifier vos informations. Vous avez encore des informations manquantes dans les case en rouge.</span>
          </div>

          <div class="button-controls">
            <button class="return">RETOUR</button>
            <button class="submit">SUIVANT</button>
          </div>

          <div class="content-description">
            <b>Mentions legales</b>
            <div>
              les donnees collectees sont traitees par BETAO AB, Editeur du Site <a>www.simplitoo.fr</a> et responsable
              de traitement, afin de vous faournir ie sevice commande. les champs avec un asterisque sant abligatories En application de la loi du 6 javbier 1978 modifiee dite information et liberies et du regle
              de traitement, afin de vous faournir ie sevice commande. les champs avec un asterisque sant abligatories En application de la loi du 6 javbier 1978 modifiee dite information et liberies et du regle
              de traitement, afin de vous faournir ie sevice commande. les champs avec un asterisque sant abligatories En application de la loi du 6 javbier 1978 modifiee dite information et liberies et du regle
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from './../components/CustomCard';

export default {
  name: 'Main',
  data() {
    return {
      menu: 2,
    };
  },
  components: { CustomCard },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #2C9ACD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: white;
}

.header .controls {
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
}

.header .controls .company-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  padding: 4px 24px;
  border: solid 2px rgba(250, 250, 250, 0.4);
  border-radius: 4px;
  width: 200px;
}

.header .controls .company-wrapper .company {
  font-size: 14px;
  text-align: left;
}

.header .controls .company-wrapper .company .sarl {
  font-size: 10px;
}

.main {
  display: flex;
}

.main .navigation {
  width: 300px;
  background-color: #F7FbFD;
  min-height: calc(100vh - 80px);
  box-shadow: -7px 1px 28px;
  color: #2C9ACD;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
}

.main .navigation .menu {
  display: flex;
  align-items: center;
  padding: 16px;
}

.main .navigation .menu-header {
  display: flex;
  align-items: center;
  padding: 16px;
  height: 75px;
}

.main .navigation .menu.active {
  border-left: solid 5px #2C9ACD;
  background: #eaecec;
}

.main .navigation .menu.active .icon-wrapper{
  width: 45px;
}

.main .navigation .menu .icon-wrapper {
  width: 50px;
  height: 24px;
  text-align: left;
}

.main .content {
  flex-grow: 1;
  padding: 80px 0;
}

.main .content .main-wrapper {
  padding: 0 95px;
  margin: 0 auto;
  width: 1110px;
}

.main .content .main-wrapper .title {
  font-size: 24px;
  font-weight: bold;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1px;
  color: #47576E;
  margin-bottom: 10px;
}

.main .content .main-wrapper p {
  letter-spacing: 1px;
  text-align: left;
  color: #888;
}

.main .content .main-wrapper .cards-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main .content .main-wrapper .warning {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E15554;
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 10px;
  padding: 10px 95px;
  font-size: 30px;
  margin-bottom: 100px;
}

.main .content .main-wrapper .warning span {
  letter-spacing: 2px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-left: 20px;
}

.main .content .button-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}

.main .content .button-controls button {
  height: 60px;
  width: 345px;
  text-align: center;
  background-color: #888;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 1px;
}

.main .content .button-controls .submit {
  background-color: #2C9ACD;
}

.main .content .content-description {
  font-size: 10px;
  line-height: 16px;
  font-style: italic;
  color: #909AAB;
  margin-bottom: 20px;
}

.important {
  font-weight: bold;
  color: #2C9ACD;
}
</style>
