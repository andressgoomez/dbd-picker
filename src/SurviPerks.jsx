import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RoulettePro from 'react-roulette-pro';
import { Center, Text, Button, Spacer, Image } from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import { FaArrowRight } from 'react-icons/fa'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'

const StyledBody = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  min-width: 500px;
`
const StyledMenu = styled.div`
  width: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
`
const StyledContainer = styled.div`
  background-image: url("/fondosp.jpg");
  background-size: cover;
  background-repeat: no-repeat top left;
  overflow-x: hidden;
  min-width: 500px;
`

const prizes = [
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killerPerks/iconPerks_aNursesCalling.png",
    "text": "VOCACION ENFERMERA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killerPerks/iconPerks_agitation.png",
    "text": "AGITACIÓN"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killerPerks/iconPerks_bamboozle.png",
    "text": "DESCONCIERTO"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killerPerks/iconPerks_BBQAndChili.png",
    "text": "BARBACOA Y CHILE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killerPerks/iconPerks_BeastOfPrey.png",
    "text": "BESTIA DE PRESA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killerPerks/iconPerks_bitterMurmur.png",
    "text": "MURMULLO AMARGO"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killerPerks/iconPerks_bloodEcho.png",
    "text": "ECO SANGRIENTO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killerPerks/iconPerks_bloodWarden.png",
    "text": "GUARDIAN DE SANGRE"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killerPerks/iconPerks_deerstalker.png",
    "text": "ACECHADOR DE CIERVOS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killerPerks/iconPerks_ironGrasp.png",
    "text": "APRETÓN DE HIERRO"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killerPerks/iconPerks_sloppyButcher.png",
    "text": "CARNICERO CHAPUCERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_saveTheBestForLast.png",
    "text": "LO MEJOR PARA EL FINAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_predator.png",
    "text": "DEPREDADOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_fireUp.png",
    "text": "ENFURECIDO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_spiesFromTheShadows.png",
    "text": "ESPÍAS DE LAS SOMBRAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_stridor.png",
    "text": "ESTRIDOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_brutalStrength.png",
    "text": "FUERZA BRUTAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_shadowborn.png",
    "text": "HIJO DE LAS SOMBRAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_lightborn.png",
    "text": "HIJO DE LA LUZ"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_unrelenting.png",
    "text": "IMPLACABLE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_insidious.png",
    "text": "INSIDIOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_playWithYourFood.png",
    "text": "JUEGA CON LA COMIDA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_dyingLight.png",
    "text": "LUZ EXTINTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_HuntressLullaby.png",
    "text": "CANCIÓN DE CAZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_devourHope.png",
    "text": "DEVORADORA DE ESPERANZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_theThirdSeal.png",
    "text": "EL TERCER SELLO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thrillOfTheHunt.png",
    "text": "LA EMOCIÓN DE LA CAZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_noOneEscapesDeath.png",
    "text": "NOED"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_ruin.png",
    "text": "RUINA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_monitorAndAbuse.png",
    "text": "MONITORIZACIÓN Y ABUSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_franklinsLoss.png",
    "text": "MUERTE DE FRANKLIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_whispers.png",
    "text": "MURMULLOS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_knockOut.png",
    "text": "NOQUEO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_TerritorialImperative.png",
    "text": "INSTINTO TERRITORIAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_overwhelmingPresence.png",
    "text": "PRESENCIA PERTURBADORA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_rememberMe.png",
    "text": "RECUÉRDAME"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_tinkerer.png",
    "text": "MANITAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_enduring.png",
    "text": "RESISTENTE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_bloodhound.png",
    "text": "SABUESO DE SANGRE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_monstrousShrine.png",
    "text": "SANTUARIO MONSTRUOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_generatorOvercharge.png",
    "text": "SOBRECARGA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thatanophobia.png",
    "text": "TANATOFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/coupDeGrace.png",
    "text": "GOLPE DE GRACIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Hoarder.png",
    "text": "ACAPARADORA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Oppression.png",
    "text": "OPRESION"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/HexCrowdControl.png",
    "text": "CONTROL DE MASAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/NoWayOut.png",
    "text": "SIN ESCAPATORIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Starstruck.png",
    "text": "DESLUMBRADO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hauntedGround.png",
    "text": "TIERRA EMBRUJADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hatred.png",
    "text": "RENCOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_spiritFury.png",
    "text": "FURIA ESPIRITUAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_corruptIntervention.png",
    "text": "INTERVENCIÓN CORRUPTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_darkDevotion.png",
    "text": "DEVOCIÓN OSCURA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_infectiousFright.png",
    "text": "TERROR CONTAGIOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hangmansTrick.png",
    "text": "TRUCO DEL VERDUGO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_makeYourChoice.png",
    "text": "TOMA UNA DECISIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_surveillance.png",
    "text": "SUPERVISIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/callOfBrine.png",
    "text": "SALMUERA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/mercilessStorm.png",
    "text": "TORMENTA DESPIADADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/floodOfRage.png",
    "text": "INUNDACIÓN DE IRA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_nemesis.png",
    "text": "NEMESIS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_zanshinTactics.png",
    "text": "TÁCTICAS ZANSHIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/eruption.png",
    "text": "ERUPCIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/lethalPursuer.png",
    "text": "ACECHO LETAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hysteria.png",
    "text": "HISTERIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_discordance.png",
    "text": "DISCORDANCIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_ironMaiden.png",
    "text": "DONCELLA DE HIERRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_madGrit.png",
    "text": "FURIA CIEGA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_furtiveChase.png",
    "text": "PERSECUSIÓN FURTIVA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_imAllEars.png",
    "text": "SOY TODO OIDOS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thrillingTremors.png",
    "text": "TEMBLORES TREPIDANTES"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/deathbound.png",
    "text": "ATADO A LA MUERTE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/forcedPenance.png",
    "text": "PENITENCIA FORZADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/trailOfTorment.png",
    "text": "RASTRO DE TORMENTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/deadManSwitch.png",
    "text": "INTERRUPTOR DEL HOMBRE MUERTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/gearHead.png",
    "text": "OIDO PARA LA MAQUINARIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexRetribution.png",
    "text": "RETRIBUCIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_coulrophobia.png",
    "text": "CLAUSTROFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_popGoesTheWeasel.png",
    "text": "PIM PAM PUM"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Deadlock.png",
    "text": "PUNTO MUERTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/HexPlaything.png",
    "text": "JUGUETE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/ScourgeHookGiftOfPain.png",
    "text": "REGALO DEL DOLOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/dragonsGrip.png",
    "text": "AGARRE DE DRAGONES"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexBloodFavor.png",
    "text": "FAVOR DE SANGRE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexUndying.png",
    "text": "ETERNO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/grimEmbrace.png",
    "text": "ABRAZO SOMBRIO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexPentimento.png",
    "text": "PENTIMENTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/painResonance.png",
    "text": "RESONANCIA DEL DOLOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_cruelConfinement.png",
    "text": "CLAUSTROFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_distressing.png",
    "text": "DESASOCIEGO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_mindBreaker.png",
    "text": "ACEDOR DE MIEDO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_surge.png",
    "text": "SACUDIDA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/painResonance.png",
    "text": "SANTUARIO MONSTRUOSO"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killerPerks/iconPerks_aNursesCalling.png",
    "text": "VOCACION ENFERMERA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killerPerks/iconPerks_agitation.png",
    "text": "AGITACIÓN"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killerPerks/iconPerks_bamboozle.png",
    "text": "DESCONCIERTO"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killerPerks/iconPerks_BBQAndChili.png",
    "text": "BARBACOA Y CHILE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killerPerks/iconPerks_BeastOfPrey.png",
    "text": "BESTIA DE PREZA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killerPerks/iconPerks_bitterMurmur.png",
    "text": "MURMULLO AMARGO"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killerPerks/iconPerks_bloodEcho.png",
    "text": "ECO SANGRIENTO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killerPerks/iconPerks_bloodWarden.png",
    "text": "GUARDIAN DE SANGRE"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killerPerks/iconPerks_deerstalker.png",
    "text": "ACECHADOR DE CIERVOS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killerPerks/iconPerks_ironGrasp.png",
    "text": "APRETÓN DE HIERRO"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killerPerks/iconPerks_sloppyButcher.png",
    "text": "CARNICERO CHAPUCERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_saveTheBestForLast.png",
    "text": "LO MEJOR PARA EL FINAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_predator.png",
    "text": "DEPREDADOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_fireUp.png",
    "text": "ENFURECIDO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_spiesFromTheShadows.png",
    "text": "ESPÍAS DE LAS SOMBRAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_stridor.png",
    "text": "ESTRIDOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_brutalStrength.png",
    "text": "FUERZA BRUTAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_shadowborn.png",
    "text": "HIJO DE LAS SOMBRAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_lightborn.png",
    "text": "HIJO DE LA LUZ"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_unrelenting.png",
    "text": "IMPLACABLE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_insidious.png",
    "text": "INSIDIOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_playWithYourFood.png",
    "text": "JUEGA CON LA COMIDA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_dyingLight.png",
    "text": "LUZ EXTINTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_HuntressLullaby.png",
    "text": "CANCION DE CAZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_devourHope.png",
    "text": "DEVORADOR DE ESPERANZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_theThirdSeal.png",
    "text": "EL TERCER SELLO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thrillOfTheHunt.png",
    "text": "LA EMOCIÓN DE LA CAZA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_noOneEscapesDeath.png",
    "text": "NOED"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_ruin.png",
    "text": "RUINA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_monitorAndAbuse.png",
    "text": "MONITORIZACIÓN Y ABUSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_franklinsLoss.png",
    "text": "MUERTE DE FRANKLIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_whispers.png",
    "text": "MURMULLOS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_knockOut.png",
    "text": "NOQUEO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_TerritorialImperative.png",
    "text": "ORDENAMIENTO TERRITORIAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_overwhelmingPresence.png",
    "text": "PRESENCIA PERTURBADORA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_rememberMe.png",
    "text": "RECUÉRDAME"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_tinkerer.png",
    "text": "MANITAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_enduring.png",
    "text": "RESISTENTE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_bloodhound.png",
    "text": "SABUESO DE SANGRE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_monstrousShrine.png",
    "text": "SANTUARIO MONSTRUOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_generatorOvercharge.png",
    "text": "SOBRECARGA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thatanophobia.png",
    "text": "TANATOFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/coupDeGrace.png",
    "text": "GOLPE DE GRACIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Hoarder.png",
    "text": "HOARDER"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Oppression.png",
    "text": "OPRESION"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/HexCrowdControl.png",
    "text": "CONTROL DE MASAS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/NoWayOut.png",
    "text": "SIN ESCAPATORIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Starstruck.png",
    "text": "DESLUMBRADO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hauntedGround.png",
    "text": "TIERRA EMBRUJADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hatred.png",
    "text": "RENCOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_spiritFury.png",
    "text": "FURIA ESPIRITUAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_corruptIntervention.png",
    "text": "INTERVENCIÓN CORRUPTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_darkDevotion.png",
    "text": "DEVOCIÓN OSCURA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_infectiousFright.png",
    "text": "TERROR CONTAGIOSO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_hangmansTrick.png",
    "text": "TRUCO DEL VERDUGO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_makeYourChoice.png",
    "text": "TOMA UNA DECISIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_surveillance.png",
    "text": "SUPERVISIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/callOfBrine.png",
    "text": "SALMUERA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/mercilessStorm.png",
    "text": "TORMENTA DESPIADADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/floodOfRage.png",
    "text": "INUNDACIÓN DE IRA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_nemesis.png",
    "text": "NEMESIS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_zanshinTactics.png",
    "text": "TÁCTICAS ZANSHIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/eruption.png",
    "text": "ERUPCIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/lethalPursuer.png",
    "text": "ACECHO LETAL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hysteria.png",
    "text": "HISTERIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_discordance.png",
    "text": "DISCORDANCIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_ironMaiden.png",
    "text": "DONCELLA DE HIERRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_madGrit.png",
    "text": "FURIA CIEGA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_furtiveChase.png",
    "text": "PERSECUSIÓN FURTIVA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_imAllEars.png",
    "text": "SOY TODO OIDOS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_thrillingTremors.png",
    "text": "TEMBLORES TREPIDANTES"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/deathbound.png",
    "text": "ATADO A LA MUERTE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/forcedPenance.png",
    "text": "PENITENCIA FORZADA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/trailOfTorment.png",
    "text": "RASTRO DE TORMENTA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/deadManSwitch.png",
    "text": "INTERRUPTOR DEL HOMBRE MUERTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/gearHead.png",
    "text": "OIDO PARA LA MAQUINARIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexRetribution.png",
    "text": "RETRIBUCIÓN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_coulrophobia.png",
    "text": "COULROFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_popGoesTheWeasel.png",
    "text": "PIM PAM PUM"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/Deadlock.png",
    "text": "PUNTO MUERTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/HexPlaything.png",
    "text": "JUGUETE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/ScourgeHookGiftOfPain.png",
    "text": "REGALO DEL DOLOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/dragonsGrip.png",
    "text": "AGARRE DE DRAGONES"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexBloodFavor.png",
    "text": "FAVOR DE SANGRE"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexUndying.png",
    "text": "ETERNO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/grimEmbrace.png",
    "text": "ABRAZO SOMBRIO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/hexPentimento.png",
    "text": "PENTIMENTO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/painResonance.png",
    "text": "RESONANCIA DEL DOLOR"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_cruelConfinement.png",
    "text": "CLAUSTROFOBIA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_distressing.png",
    "text": "DESASOCIEGO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_mindBreaker.png",
    "text": "ACEDOR DE MIEDO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/iconPerks_surge.png",
    "text": "SACUDIDA"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killerPerks/painResonance.png",
    "text": "SANTUARIO MONSTRUOSO"
  },

]

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
]

const prizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const getRandomArbitrary = (min, max) => {
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)
}

const SurviPerks = () => {

  const [start, setStart] = useState(false)

  const [cargando, setCargando] = useState(false)

  const [prizeIndex, setPrizeIndex] = useState(0)

  const handleStart = () => {
    setCargando(true)
    setPrizeIndex(getRandomArbitrary(360, prizeList.length))
    setStart(true);
  };

  const handleReset = () => {
    setCargando(false)
    setStart(false)
    setPrizeIndex(0)
  };

  const handlePrizeDefined = () => {
    setOverlay(<OverlayOne />)
    onOpen()


    console.log(prizeList)
    console.log(prizeIndex)
  };

  const OverlayOne = () => (
    <ModalOverlay bg='blackAlpha.300'
      backdropFilter='auto' backdropBlur='8px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (<>
    <StyledContainer>
      <StyledMenu>
        <Menu>
          <MenuButton mx={6} my={1} colorScheme='purple'
            as={Button}
            rightIcon={<AiOutlineMenu />}
          >MENU</MenuButton>
          <MenuList color='black' height='230px'>
            <MenuGroup>
              <Link to='/killers'><MenuItem><Button colorScheme='red' minWidth='200px' width='100%' height='35px' ><Center><Text fontSize='md' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TU KILLER</Text><Image mx={2} src='/mm.png' width='35px'></Image></Center></Button></MenuItem></Link>
              <Link to='/perks'><MenuItem><Button _hover={{ bg: '#632aff', color: 'white' }} colorScheme='purple' minWidth='250px' width='100%' height='35px' ><Center><Text fontSize='md' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TUS KILLER PERKS</Text><Image mx={2} src='/noed.png' width='35px'></Image></Center></Button></MenuItem></Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <Link to='/survivor'><MenuItem><Button colorScheme='green' minWidth='285px' width='100%' height='35px' ><Center><Text fontSize='md' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TU SOBREVIVIENTE</Text><Image mx={2} src='/fajador.png' width='35px'></Image></Center></Button></MenuItem></Link>
              <Link to='/surviperks'><MenuItem><Button _hover={{ bg: '#632aff', color: 'white' }} colorScheme='purple' minWidth='280px' width='100%' height='35px' ><Center><Text fontSize='md' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TUS SURVIVAL PERKS</Text><Image mx={2} src='/tiempoprestado.png' width='35px'></Image></Center></Button></MenuItem></Link>
            </MenuGroup>
          </MenuList>
        </Menu>
      </StyledMenu>
      <StyledBody>

        <Image src='/tiempoprestado.png' width='180px'></Image>
        <Text textShadow='4px 4px 2px #000000' fontSize='6xl' color='#7c2578' fontWeight='extrabold'>¡ELIGE TUS SURVIVAL PERKS!</Text>
        <Spacer />
        <Text textShadow='2px 2px 2px #000000' >
          <RoulettePro
            prizes={prizeList}
            prizeIndex={prizeIndex}
            start={start}
            spinningTime={10}
            onPrizeDefined={handlePrizeDefined}
            design={'GracefulLines'}
            soundWhileSpinning={'/sonidoSpinner.mp3'}
          />
        </Text>
        {cargando ? <Button isLoading mb={4} colorScheme='purple' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/perk.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button> : <Button _hover={{ bg: '#7c2578', border: '1px solid white', color: 'white' }} mb={4} colorScheme='yellow' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/perk.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button>}
        <Button _hover={{ bg: '#b1b1b1', border: '1px solid white', color: 'white' }} colorScheme='whiteAlpha' width='250px' height='50px' onClick={handleReset}><Center><Text fontSize='4xl' mr={2}><GrPowerReset /></Text><Text fontSize='2xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> REINICIAR</Text></Center> </Button>

        <Link to='/survivor'><Button mt={14} mb={5} colorScheme='green' width='350px' height='50px' ><Center><Text fontSize='2xl' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TU SOBREVIVIENTE</Text><Text fontSize='xl' ml={2} ><FaArrowRight /></Text></Center></Button></Link>

        <Center>
          <Text mb={2} fontSize='sm' fontWeight='bold'>
            <a href='https://www.instagram.com/andressgoomez/' target='_blank' >
              Andr&eacute;s Gomez
            </a> 2022 &copy;
          </Text>
        </Center>
      </StyledBody>
    </StyledContainer>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader><Text fontSize='2xl' textShadow='2px 2px 2px #757575' as='ins' color='black' fontWeight='bold'>PERK SELECCIONADA</Text></ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Center><Image borderRadius='25' src={prizeList[prizeIndex].image} width='50%'></Image></Center>
          <Center><Text m={4} px={4} fontSize='2xl' borderRadius='2xl' textShadow='2px 2px 2px #979696' backgroundColor='black' color='white' fontWeight='bold'>{prizeList[prizeIndex].text}</Text></Center>
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button _hover={{ bg: '#b30f0f' }} colorScheme="red" onClick={onClose}><Text fontSize='lg' textShadow='2px 2px 2px #363636' color='white'>Cerrar</Text></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>)
}

export default SurviPerks