import React, { useState } from 'react';
import {
  Button,
  Heading,
  HStack,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  Divider,
} from '@chakra-ui/react';

import { useInputGenerator } from '../utils/useInputGenerator';
import { useRequests } from '../services/useRequests';

const MAX_VALUE = 7;
const MIN_VALUE = 1;

function ButtonsTab() {
  const { sendInput } = useRequests();
  const { setAllModules, generateWaveInput } = useInputGenerator();

  const [wavePeriod, setWavePeriod] = useState(0);
  const [waveMagnitude, setWaveMagnitude] = useState(0);

  function testSystem() {
    sendInput(setAllModules(MIN_VALUE));
  }

  function resetSystem() {
    sendInput(setAllModules(0));
  }

  function setMaxSystem() {
    sendInput(setAllModules(MAX_VALUE));
  }

  function setWaveInput(mode = 'direct') {
    sendInput(generateWaveInput(mode, waveMagnitude), wavePeriod);
  }

  return (
    <VStack w="full" p={10}>
      <Heading as="h2" size="lg">
        Entrada para todos os módulos
      </Heading>
      <HStack p={5}>
        <Button onClick={resetSystem}>Reset</Button>
        <Button onClick={testSystem}>Teste</Button>
        <Button onClick={setMaxSystem}>Max</Button>
      </HStack>
      <Divider />
      <Heading as="h3" size="md" py={5}>
        Configuração para onda
      </Heading>
      <HStack w="40%" justifyContent="space-between">
        <FormLabel>Periodo</FormLabel>
        <NumberInput
          w="100px"
          min={0.01}
          defaultValue={0.01}
          onChange={setWavePeriod}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <HStack w="40%" justifyContent="space-between">
        <FormLabel>Magnitude</FormLabel>
        <NumberInput
          w="100px"
          min={0}
          max={7}
          defaultValue={0}
          onChange={setWaveMagnitude}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <HStack p={5}>
        <Button onClick={setWaveInput}>Onda</Button>
        <Button onClick={() => setWaveInput('reverse')}>Onda reversa</Button>
      </HStack>
    </VStack>
  );
}

export default ButtonsTab;
