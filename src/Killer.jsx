import React, { useState } from 'react'
import styled from 'styled-components'
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import { Link } from 'react-router-dom'
import { Center, Text, Button, Spacer, Image } from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import { FaArrowRight } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider, Spinner, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider
} from '@chakra-ui/react'

const StyledBody = styled.div`
  min-height: 95vh;
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const StyledMenu = styled.div`
  width: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
`
const StyledContainer = styled.div`
  background-image: url("/fondok.jpg");
  background-size: cover;
  overflow-x: hidden;
  min-width: 500px;
`


const prizes = [
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killers/arponero.jpg",
    "text": "ARPONERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killers/artista.jpg",
    "text": "ARTISTA"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killers/bruja.png",
    "text": "BRUJA"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killers/bubba.jpg",
    "text": "BUBBA"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killers/cazadora.jpg",
    "text": "CAZADORA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killers/cerda.jpg",
    "text": "CERDA"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killers/demomorgon.jpg",
    "text": "DEMOGORGON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killers/deterioro.jpg",
    "text": "DETERIORO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killers/doctor.jpg",
    "text": "DOCTOR"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killers/dredge.jpeg",
    "text": "DREDGE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killers/espectro.jpg",
    "text": "ESPECTRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killers/espiritu.jpg",
    "text": "ESPÍRITU"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/killers/freddy.png",
    "text": "FREDDY"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/killers/ghostface.jpg",
    "text": "GHOSTFACE"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/killers/hillbilly.jpg",
    "text": "HILLBILLY"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/killers/trickster.jpg",
    "text": "TRICKSTER"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/killers/legion.jpg",
    "text": "LEGIÓN"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/killers/myers.jpg",
    "text": "MYERS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/killers/nemesis.jpg",
    "text": "NEMESIS"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/killers/nurse.jpg",
    "text": "ENFERMERA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/killers/oni.jpg",
    "text": "ONI"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/killers/onryo.jpg",
    "text": "ONRYO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/killers/payaso.png",
    "text": "PAYASO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/killers/pyramidhead.jpg",
    "text": "PYRAMIDHEAD"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/killers/plaga.jpg",
    "text": "PLAGA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/killers/pinhead.jpg",
    "text": "PINHEAD"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/killers/trampero.jpg",
    "text": "TRAMPERO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/killers/twins.jpg",
    "text": "MELLIZOS"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killers/arponero.jpg",
    "text": "ARPONERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killers/artista.jpg",
    "text": "ARTISTA"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killers/bruja.png",
    "text": "BRUJA"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killers/bubba.jpg",
    "text": "BUBBA"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killers/cazadora.jpg",
    "text": "CAZADORA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killers/cerda.jpg",
    "text": "CERDA"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killers/demomorgon.jpg",
    "text": "DEMOGORGON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killers/deterioro.jpg",
    "text": "DETERIORO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killers/doctor.jpg",
    "text": "DOCTOR"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killers/dredge.jpeg",
    "text": "DREDGE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killers/espectro.jpg",
    "text": "ESPECTRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killers/espiritu.jpg",
    "text": "ESPIRÍTU"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/killers/freddy.png",
    "text": "FREDDY"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/killers/ghostface.jpg",
    "text": "GHOSTFACE"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/killers/hillbilly.jpg",
    "text": "HILLBILLY"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/killers/trickster.jpg",
    "text": "TRICKSTER"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/killers/legion.jpg",
    "text": "LEGIÓN"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/killers/myers.jpg",
    "text": "MYERS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/killers/nemesis.jpg",
    "text": "NEMESIS"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/killers/nurse.jpg",
    "text": "NURSE"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/killers/oni.jpg",
    "text": "ONI"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/killers/onryo.jpg",
    "text": "ONRYO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/killers/payaso.png",
    "text": "PAYASO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/killers/pyramidhead.jpg",
    "text": "PYRAMIDHEAD"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/killers/plaga.jpg",
    "text": "PLAGA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/killers/pinhead.jpg",
    "text": "PINHEAD"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/killers/trampero.jpg",
    "text": "TRAMPERO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/killers/twins.jpg",
    "text": "TWINS"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killers/arponero.jpg",
    "text": "ARPONERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killers/artista.jpg",
    "text": "ARTISTA"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killers/bruja.png",
    "text": "BRUJA"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killers/bubba.jpg",
    "text": "BUBBA"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killers/cazadora.jpg",
    "text": "CAZADORA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killers/cerda.jpg",
    "text": "CERDA"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killers/demomorgon.jpg",
    "text": "DEMOGORGON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killers/deterioro.jpg",
    "text": "DETERIORO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killers/doctor.jpg",
    "text": "DOCTOR"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killers/dredge.jpeg",
    "text": "DREDGE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killers/espectro.jpg",
    "text": "ESPECTRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killers/espiritu.jpg",
    "text": "ESPIRÍTU"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/killers/freddy.png",
    "text": "FREDDY"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/killers/ghostface.jpg",
    "text": "GHOSTFACE"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/killers/hillbilly.jpg",
    "text": "HILLBILLY"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/killers/trickster.jpg",
    "text": "TRICKSTER"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/killers/legion.jpg",
    "text": "LEGIÓN"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/killers/myers.jpg",
    "text": "MYERS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/killers/nemesis.jpg",
    "text": "NEMESIS"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/killers/nurse.jpg",
    "text": "NURSE"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/killers/oni.jpg",
    "text": "ONI"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/killers/onryo.jpg",
    "text": "ONRYO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/killers/payaso.png",
    "text": "PAYASO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/killers/pyramidhead.jpg",
    "text": "PYRAMIDHEAD"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/killers/plaga.jpg",
    "text": "PLAGA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/killers/pinhead.jpg",
    "text": "PINHEAD"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/killers/trampero.jpg",
    "text": "TRAMPERO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/killers/twins.jpg",
    "text": "TWINS"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killers/arponero.jpg",
    "text": "ARPONERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killers/artista.jpg",
    "text": "ARTISTA"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killers/bruja.png",
    "text": "BRUJA"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killers/bubba.jpg",
    "text": "BUBBA"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killers/cazadora.jpg",
    "text": "CAZADORA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killers/cerda.jpg",
    "text": "CERDA"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killers/demomorgon.jpg",
    "text": "DEMOGORGON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killers/deterioro.jpg",
    "text": "DETERIORO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killers/doctor.jpg",
    "text": "DOCTOR"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killers/dredge.jpeg",
    "text": "DREDGE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killers/espectro.jpg",
    "text": "ESPECTRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killers/espiritu.jpg",
    "text": "ESPIRÍTU"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/killers/freddy.png",
    "text": "FREDDY"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/killers/ghostface.jpg",
    "text": "GHOSTFACE"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/killers/hillbilly.jpg",
    "text": "HILLBILLY"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/killers/trickster.jpg",
    "text": "TRICKSTER"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/killers/legion.jpg",
    "text": "LEGIÓN"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/killers/myers.jpg",
    "text": "MYERS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/killers/nemesis.jpg",
    "text": "NEMESIS"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/killers/nurse.jpg",
    "text": "NURSE"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/killers/oni.jpg",
    "text": "ONI"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/killers/onryo.jpg",
    "text": "ONRYO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/killers/payaso.png",
    "text": "PAYASO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/killers/pyramidhead.jpg",
    "text": "PYRAMIDHEAD"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/killers/plaga.jpg",
    "text": "PLAGA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/killers/pinhead.jpg",
    "text": "PINHEAD"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/killers/trampero.jpg",
    "text": "TRAMPERO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/killers/twins.jpg",
    "text": "TWINS"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/killers/arponero.jpg",
    "text": "ARPONERO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/killers/artista.jpg",
    "text": "ARTISTA"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/killers/bruja.png",
    "text": "BRUJA"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/killers/bubba.jpg",
    "text": "BUBBA"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/killers/cazadora.jpg",
    "text": "CAZADORA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/killers/cerda.jpg",
    "text": "CERDA"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/killers/demomorgon.jpg",
    "text": "DEMOGORGON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/killers/deterioro.jpg",
    "text": "DETERIORO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/killers/doctor.jpg",
    "text": "DOCTOR"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/killers/dredge.jpeg",
    "text": "DREDGE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/killers/espectro.jpg",
    "text": "ESPECTRO"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/killers/espiritu.jpg",
    "text": "ESPIRÍTU"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/killers/freddy.png",
    "text": "FREDDY"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/killers/ghostface.jpg",
    "text": "GHOSTFACE"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/killers/hillbilly.jpg",
    "text": "HILLBILLY"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/killers/trickster.jpg",
    "text": "TRICKSTER"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/killers/legion.jpg",
    "text": "LEGIÓN"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/killers/myers.jpg",
    "text": "MYERS"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/killers/nemesis.jpg",
    "text": "NEMESIS"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/killers/nurse.jpg",
    "text": "NURSE"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/killers/oni.jpg",
    "text": "ONI"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/killers/onryo.jpg",
    "text": "ONRYO"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/killers/payaso.png",
    "text": "PAYASO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/killers/pyramidhead.jpg",
    "text": "PYRAMIDHEAD"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/killers/plaga.jpg",
    "text": "PLAGA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/killers/pinhead.jpg",
    "text": "PINHEAD"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/killers/trampero.jpg",
    "text": "TRAMPERO"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/killers/twins.jpg",
    "text": "TWINS"
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


const Killer = () => {

  const [start, setStart] = useState(false);

  const [prizeIndex, setPrizeIndex] = useState(0);

  const [cargando, setCargando] = useState(false)


  const handleStart = () => {
    setCargando(true)
    setPrizeIndex(getRandomArbitrary(350, prizeList.length));
    setStart(true);
  };

  const handleReset = () => {
    setCargando(false)
    setStart(false);
    setPrizeIndex(0);
  };

  const handlePrizeDefined = () => {
    setOverlay(<OverlayOne />)
    onOpen()

    console.log(prizeList)
    console.log(prizeIndex);
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
          <MenuButton mx={6} my={1} colorScheme='red'
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
        <Image src='/mm.png' width='180px'></Image>

        <Center><Text textShadow='4px 4px 2px #000000' fontSize='6xl' color='#b30f0f' minWidth='200px' fontWeight='extrabold'>¡ELIGE TU KILLER!</Text></Center>

        <Spacer> </Spacer>
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
        {cargando ? <Button isLoading mb={4} colorScheme='red' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/knife.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button> : <Button _hover={{ bg: '#a31b1b', border: '1px solid white', color: 'white' }} mb={4} colorScheme='yellow' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/knife.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button>}
        <Button _hover={{ bg: '#b1b1b1', border: '1px solid white', color: 'white' }} colorScheme='whiteAlpha' width='250px' height='50px' onClick={handleReset}><Center><Text fontSize='4xl' mr={2}><GrPowerReset /></Text><Text fontSize='2xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> REINICIAR</Text></Center> </Button>

        <Link to='/perks'><Button _hover={{ bg: '#632aff', border: '1px solid white', color: 'white' }} mt={14} mb={5} colorScheme='purple' width='350px' height='50px' ><Center><Text fontSize='2xl' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TUS KILLER PERKS</Text><Text fontSize='xl' ml={2} ><FaArrowRight /></Text></Center></Button></Link>

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
        <ModalHeader><Text fontSize='2xl' textShadow='2px 2px 2px #757575' as='ins' color='black' fontWeight='bold'>KILLER SELECCIONADO</Text></ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Image borderRadius='25' boxShadow='2px 4px 4px black;' src={prizeList[prizeIndex].image} width='100%'></Image>
          <Center><Text m={4} px={4} fontSize='4xl' borderRadius='2xl' textShadow='2px 2px 2px #979696' backgroundColor='black' color='white' fontWeight='bold'>{prizeList[prizeIndex].text}</Text></Center>
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Link to='/perks'><Button _hover={{ bg: '#632aff' }} mx={2} colorScheme="purple" ><Text fontSize='lg' textShadow='2px 2px 2px #363636' color='white'>Elegir perks</Text></Button></Link>
          <Button _hover={{ bg: '#b30f0f' }} colorScheme="red" onClick={onClose}><Text fontSize='lg' textShadow='2px 2px 2px #363636' color='white'>Cerrar</Text></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  </>)
}

export default Killer