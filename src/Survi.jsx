import React, { useState } from 'react'
import styled from 'styled-components'
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import { Link } from 'react-router-dom'
import { Center, Text, Button, Spacer, Image } from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'
import { FaArrowRight } from 'react-icons/fa'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Divider, Spinner, Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'

const StyledBody = styled.div`
  min-height: 95vh;
  width: 100%;
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
  background-image: url("/fondos.jpg");
  background-size: cover;
  background-repeat: no-repeat top left;
  overflow-x: hidden;
  min-width: 500px;
`


const prizes = [
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/dwight.png",
    "text": "DWIGHT"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/meg.png",
    "text": "MEG"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/claudette.png",
    "text": "CLAUDETTE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/survis/jake.png",
    "text": "JAKE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/survis/nea.jpg",
    "text": "NEA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/survis/laurie.jpg",
    "text": "LAURIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/survis/ace.jpg",
    "text": "ACE"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/survis/bill.jpg",
    "text": "BILL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/survis/feng.jpg",
    "text": "FENG MING"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/survis/david.png",
    "text": "DAVID KING"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/survis/quentin.jpg",
    "text": "QUENTIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/survis/tapp.png",
    "text": "DETECTIVE TAPP"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/survis/kate.jpg",
    "text": "KATE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/survis/adamfrancis.jpg",
    "text": "ADAM FRANCIS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/survis/jeff.png",
    "text": "JEFF"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/survis/jane.jpg",
    "text": "JANE ROMERO"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/survis/ash.jpeg",
    "text": "ASH"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/survis/nancy.png",
    "text": "NANCY"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/survis/steve.jpg",
    "text": "STEVE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/survis/yui.jpg",
    "text": "YUI"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/survis/zarina.jpg",
    "text": "ZARINA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/survis/cheryl.jpg",
    "text": "CHERYL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/survis/felix.jpg",
    "text": "FELIX"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/survis/elodie.jpg",
    "text": "ELODIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/survis/yun.jpg",
    "text": "YUN"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/survis/jill.jpg",
    "text": "JILL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/survis/leon.jpg",
    "text": "LEON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/survis/mikaela.jpg",
    "text": "MIKAELA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/jonah.jpg",
    "text": "JONAH"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/yoichi.jpg",
    "text": "YOICHI"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/haddie.png",
    "text": "HADDIE"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/dwight.png",
    "text": "DWIGHT"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/meg.png",
    "text": "MEG"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/claudette.png",
    "text": "CLAUDETTE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/survis/jake.png",
    "text": "JAKE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/survis/nea.jpg",
    "text": "NEA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/survis/laurie.jpg",
    "text": "LAURIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/survis/ace.jpg",
    "text": "ACE"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/survis/bill.jpg",
    "text": "BILL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/survis/feng.jpg",
    "text": "FENG MING"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/survis/david.png",
    "text": "DAVID KING"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/survis/quentin.jpg",
    "text": "QUENTIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/survis/tapp.png",
    "text": "DETECTIVE TAPP"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/survis/kate.jpg",
    "text": "KATE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/survis/adamfrancis.jpg",
    "text": "ADAM FRANCIS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/survis/jeff.png",
    "text": "JEFF"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/survis/jane.jpg",
    "text": "JANE ROMERO"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/survis/ash.jpeg",
    "text": "ASH"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/survis/nancy.png",
    "text": "NANCY"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/survis/steve.jpg",
    "text": "STEVE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/survis/yui.jpg",
    "text": "YUI"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/survis/zarina.jpg",
    "text": "ZARINA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/survis/cheryl.jpg",
    "text": "CHERYL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/survis/felix.jpg",
    "text": "FELIX"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/survis/elodie.jpg",
    "text": "ELODIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/survis/yun.jpg",
    "text": "YUN"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/survis/jill.jpg",
    "text": "JILL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/survis/leon.jpg",
    "text": "LEON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/survis/mikaela.jpg",
    "text": "MIKAELA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/jonah.jpg",
    "text": "JONAH"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/yoichi.jpg",
    "text": "YOICHI"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/haddie.png",
    "text": "HADDIE"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/dwight.png",
    "text": "DWIGHT"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/meg.png",
    "text": "MEG"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/claudette.png",
    "text": "CLAUDETTE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/survis/jake.png",
    "text": "JAKE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/survis/nea.jpg",
    "text": "NEA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/survis/laurie.jpg",
    "text": "LAURIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/survis/ace.jpg",
    "text": "ACE"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/survis/bill.jpg",
    "text": "BILL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/survis/feng.jpg",
    "text": "FENG MING"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/survis/david.png",
    "text": "DAVID KING"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/survis/quentin.jpg",
    "text": "QUENTIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/survis/tapp.png",
    "text": "DETECTIVE TAPP"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/survis/kate.jpg",
    "text": "KATE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/survis/adamfrancis.jpg",
    "text": "ADAM FRANCIS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/survis/jeff.png",
    "text": "JEFF"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/survis/jane.jpg",
    "text": "JANE ROMERO"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/survis/ash.jpeg",
    "text": "ASH"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/survis/nancy.png",
    "text": "NANCY"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/survis/steve.jpg",
    "text": "STEVE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/survis/yui.jpg",
    "text": "YUI"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/survis/zarina.jpg",
    "text": "ZARINA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/survis/cheryl.jpg",
    "text": "CHERYL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/survis/felix.jpg",
    "text": "FELIX"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/survis/elodie.jpg",
    "text": "ELODIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/survis/yun.jpg",
    "text": "YUN"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/survis/jill.jpg",
    "text": "JILL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/survis/leon.jpg",
    "text": "LEON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/survis/mikaela.jpg",
    "text": "MIKAELA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/jonah.jpg",
    "text": "JONAH"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/yoichi.jpg",
    "text": "YOICHI"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/haddie.png",
    "text": "HADDIE"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/dwight.png",
    "text": "DWIGHT"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/meg.png",
    "text": "MEG"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/claudette.png",
    "text": "CLAUDETTE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/survis/jake.png",
    "text": "JAKE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/survis/nea.jpg",
    "text": "NEA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/survis/laurie.jpg",
    "text": "LAURIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/survis/ace.jpg",
    "text": "ACE"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/survis/bill.jpg",
    "text": "BILL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/survis/feng.jpg",
    "text": "FENG MING"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/survis/david.png",
    "text": "DAVID KING"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/survis/quentin.jpg",
    "text": "QUENTIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/survis/tapp.png",
    "text": "DETECTIVE TAPP"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/survis/kate.jpg",
    "text": "KATE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/survis/adamfrancis.jpg",
    "text": "ADAM FRANCIS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/survis/jeff.png",
    "text": "JEFF"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/survis/jane.jpg",
    "text": "JANE ROMERO"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/survis/ash.jpeg",
    "text": "ASH"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/survis/nancy.png",
    "text": "NANCY"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/survis/steve.jpg",
    "text": "STEVE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/survis/yui.jpg",
    "text": "YUI"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/survis/zarina.jpg",
    "text": "ZARINA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/survis/cheryl.jpg",
    "text": "CHERYL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/survis/felix.jpg",
    "text": "FELIX"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/survis/elodie.jpg",
    "text": "ELODIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/survis/yun.jpg",
    "text": "YUN"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/survis/jill.jpg",
    "text": "JILL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/survis/leon.jpg",
    "text": "LEON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/survis/mikaela.jpg",
    "text": "MIKAELA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/jonah.jpg",
    "text": "JONAH"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/yoichi.jpg",
    "text": "YOICHI"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/haddie.png",
    "text": "HADDIE"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/dwight.png",
    "text": "DWIGHT"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/meg.png",
    "text": "MEG"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/claudette.png",
    "text": "CLAUDETTE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--flR0clEz0StFi2kQbs0TP",
    "image": "/survis/jake.png",
    "text": "JAKE"
  },
  {
    "id": "23c551bf-8425-4ffd-b7c2-77c87844f89d--eN_YLdiS0QkmhwjvM6HEf",
    "image": "/survis/nea.jpg",
    "text": "NEA"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--NO0uuQphUVDeP2TpfUHX8",
    "image": "/survis/laurie.jpg",
    "text": "LAURIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--9E9LIJhGvwIuTh_3lNHa4",
    "image": "/survis/ace.jpg",
    "text": "ACE"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--byXYTYZiPhK0TBRwC8sN6",
    "image": "/survis/bill.jpg",
    "text": "BILL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--N9KeDX7qvay34Pj3AFlsR",
    "image": "/survis/feng.jpg",
    "text": "FENG MING"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--CTN6hytIuKxl8nPJsTKNr",
    "image": "/survis/david.png",
    "text": "DAVID KING"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--vNxlcJP5srri8GC-7MQNw",
    "image": "/survis/quentin.jpg",
    "text": "QUENTIN"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--sLNDxrUgUhpYteeZRh67j",
    "image": "/survis/tapp.png",
    "text": "DETECTIVE TAPP"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--XBb6v3p1pMIGTH5qptkE_",
    "image": "/survis/kate.jpg",
    "text": "KATE"
  },
  {
    "id": "04106f3f-f99f-47e4-a62e-3c81fc8cf794--H030uh0t4zDecQZ3pSQqY",
    "image": "/survis/adamfrancis.jpg",
    "text": "ADAM FRANCIS"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--8Dx3158cU40IWe4-VVeJm",
    "image": "/survis/jeff.png",
    "text": "JEFF"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--_PEatKSg3XLxiDVkzLEF2",
    "image": "/survis/jane.jpg",
    "text": "JANE ROMERO"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--hbahdWVPLL4Oj5o3rL8XJ",
    "image": "/survis/ash.jpeg",
    "text": "ASH"
  },
  {
    "id": "bd9f86a3-9a72-4ba3-a071-3ea9cbc87cc1--RS_8h4VBFptkA2dCpcFeA",
    "image": "/survis/nancy.png",
    "text": "NANCY"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--Xt_Xs8dw7btJ1UrH-LRdF",
    "image": "/survis/steve.jpg",
    "text": "STEVE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--fzjhNLww_vcrkWAZ6yazq",
    "image": "/survis/yui.jpg",
    "text": "YUI"
  },
  {
    "id": "e4060930-538f-4bf7-ab8e-8d2aa05fba43--2q0hfwAfqdsYoxaihPwQH",
    "image": "/survis/zarina.jpg",
    "text": "ZARINA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--BnbZjMjRQ7h_HtMjk6N1Q",
    "image": "/survis/cheryl.jpg",
    "text": "CHERYL"
  },
  {
    "id": "c769c2b1-df6e-4e6e-8985-53b531527b35--sBKOx0m_y9RooGTWp7RAT",
    "image": "/survis/felix.jpg",
    "text": "FELIX"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--JwvwJzml7DJNlA5tcOyTG",
    "image": "/survis/elodie.jpg",
    "text": "ELODIE"
  },
  {
    "id": "fb121804-e4f6-4fce-bdd6-1e3189172f37--lqeB4DE9PQnvlkD6wW3gH",
    "image": "/survis/yun.jpg",
    "text": "YUN"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--OnPsPfTgBYzTva9HlX5o3",
    "image": "/survis/jill.jpg",
    "text": "JILL"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--pEfiHYUlH0zpWlliA3N_0",
    "image": "/survis/leon.jpg",
    "text": "LEON"
  },
  {
    "id": "26ee933e-0858-481d-afe8-b30d3829242a--FxzVbhlnlEiANUweVzHzE",
    "image": "/survis/mikaela.jpg",
    "text": "MIKAELA"
  },
  {
    "id": "a44c728d-8a0e-48ca-a963-3d5ce6dd41b0--l2hewA_60b4_m5GSU87g3",
    "image": "/survis/jonah.jpg",
    "text": "JONAH"
  },
  {
    "id": "7d24b681-82d9-4fc0-b034-c82f9db11a59--K6Mc_V0Du7uEy479kUIZp",
    "image": "/survis/yoichi.jpg",
    "text": "YOICHI"
  },
  {
    "id": "9da9a287-952f-41bd-8c7a-b488938d7c7a--1inb-xuFaZOZhLby7aTyl",
    "image": "/survis/haddie.png",
    "text": "HADDIE"
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


const Survi = () => {

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
          <MenuButton mx={6} my={1} colorScheme='green'
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
        <Image src='/fajador.png' width='180px'></Image>
        <Text textShadow='4px 4px 2px #000000' fontSize='6xl' color='#0f881a' fontWeight='extrabold'>¡ELIGE TU SOBREVIVIENTE!</Text>

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
        {cargando ? <Button isLoading mb={4} colorScheme='green' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/gen.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button> : <Button _hover={{ bg: '#0f881a', border: '1px solid white', color: 'white' }} mb={4} colorScheme='yellow' width='350px' height='80px' onClick={handleStart}><Center><Image mx={3} src='/gen.png' w='15%'></Image><Text fontSize='4xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> GIRAR</Text></Center> </Button>}
        <Button _hover={{ bg: '#b1b1b1', border: '1px solid white', color: 'white' }} colorScheme='whiteAlpha' width='250px' height='50px' onClick={handleReset}><Center><Text fontSize='4xl' mr={2}><GrPowerReset /></Text><Text fontSize='2xl' color='white' textShadow='2px 2px 2px #000000' fontWeight='bold'> REINICIAR</Text></Center> </Button>

        <Link to='/surviperks'><Button _hover={{ bg: '#632aff', border: '1px solid white', color: 'white' }} mt={14} mb={5} colorScheme='purple' width='36as0px' height='50px' ><Center><Text fontSize='2xl' textShadow='2px 2px 2px #000000' color='white' fontWeight='bold'>ELIGE TUS SURVIVAL PERKS</Text><Text fontSize='xl' ml={2} ><FaArrowRight /></Text></Center></Button></Link>

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
        <ModalHeader><Text fontSize='2xl' textShadow='2px 2px 2px #757575' as='ins' color='black' fontWeight='bold'>SOBREVIVIENTE SELECCIONADO</Text></ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody>
          <Image borderRadius='25' boxShadow='2px 4px 4px black;' src={prizeList[prizeIndex].image} width='100%'></Image>
          <Center><Text m={4} px={4} fontSize='4xl' borderRadius='2xl' textShadow='2px 2px 2px #979696' backgroundColor='black' color='white' fontWeight='bold'>{prizeList[prizeIndex].text}</Text></Center>
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button _hover={{ bg: '#b30f0f' }} colorScheme="red" onClick={onClose}><Text fontSize='lg' textShadow='2px 2px 2px #363636' color='white'>Cerrar</Text></Button>
          <Link to='/perks'><Button _hover={{ bg: '#632aff' }} mx={2} colorScheme="purple" ><Text fontSize='lg' textShadow='2px 2px 2px #363636' color='white'>Elegir perks</Text></Button></Link>
        </ModalFooter>
      </ModalContent>
    </Modal>

  </>)
}

export default Survi