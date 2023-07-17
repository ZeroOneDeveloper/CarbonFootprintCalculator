"use client";

import React, { useState } from "react";

import { IconType } from "react-icons";
import { LuDroplet, LuPlug, LuTrash2, LuBus, LuHeart } from "react-icons/lu";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

const Water: React.FC = () => {
  const [familyNumber, setFamilyNumber] = useState(1);
  const [useWaterAmount, setUseWaterAmount] = useState(1);
  return (
    <div>
      <Stack spacing={3}>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>가족 수</Text>
            <Input
              htmlSize={4}
              width="24"
              type="number"
              variant="flushed"
              borderColor="gray.500"
              fontWeight={800}
              value={familyNumber}
            />
          </div>
          <InputGroup gap={1}>
            <Button
              colorScheme="blue"
              onClick={() => setFamilyNumber(familyNumber + 1)}
            >
              +
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (familyNumber > 1) setFamilyNumber(familyNumber - 1);
              }}
            >
              -
            </Button>
          </InputGroup>
        </InputGroup>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>수도 사용량(㎥/월)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useWaterAmount}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseWaterAmount(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useWaterAmount}
                onChange={(value) => setUseWaterAmount(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
        </InputGroup>
        <Text fontSize="xl" fontWeight={900} marginTop="1rem">
          수도 {useWaterAmount} (㎥/월)의 양을 사용해 발생한 CO₂량은{" "}
          {((useWaterAmount * 1.53) / familyNumber).toFixed(1)} kg-CO₂입니다.
        </Text>
      </Stack>
    </div>
  );
};

const Electricity: React.FC = () => {
  const [familyNumber, setFamilyNumber] = useState(1);
  const [useElectrity, setUseElectrity] = useState(1);
  return (
    <div>
      <Stack spacing={3}>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>가족 수</Text>
            <Input
              htmlSize={4}
              width="24"
              type="number"
              variant="flushed"
              borderColor="gray.500"
              fontWeight={800}
              value={familyNumber}
            />
          </div>
          <InputGroup gap={1}>
            <Button
              colorScheme="blue"
              onClick={() => setFamilyNumber(familyNumber + 1)}
            >
              +
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (familyNumber > 1) setFamilyNumber(familyNumber - 1);
              }}
            >
              -
            </Button>
          </InputGroup>
        </InputGroup>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>전기 사용량(kWh/월)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useElectrity}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseElectrity(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useElectrity}
                onChange={(value) => setUseElectrity(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
        </InputGroup>
        <Text fontSize="xl" fontWeight={900} marginTop="1rem">
          전기 {useElectrity} (kWh/월)의 양을 사용해 발생한 CO₂량은{" "}
          {((useElectrity * 0.24) / familyNumber).toFixed(1)} kg-CO₂입니다.
        </Text>
      </Stack>
    </div>
  );
};

const Trash: React.FC = () => {
  const [familyNumber, setFamilyNumber] = useState(1);
  const [useTrash, setUseTrash] = useState(1);
  return (
    <div>
      <Stack spacing={3}>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>가족 수</Text>
            <Input
              htmlSize={4}
              width="24"
              type="number"
              variant="flushed"
              borderColor="gray.500"
              fontWeight={800}
              value={familyNumber}
            />
          </div>
          <InputGroup gap={1}>
            <Button
              colorScheme="blue"
              onClick={() => setFamilyNumber(familyNumber + 1)}
            >
              +
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (familyNumber > 1) setFamilyNumber(familyNumber - 1);
              }}
            >
              -
            </Button>
          </InputGroup>
        </InputGroup>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>쓰레기 배출량(l/월)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useTrash}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseTrash(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useTrash}
                onChange={(value) => setUseTrash(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
        </InputGroup>
        <Text fontSize="xl" fontWeight={900} marginTop="1rem">
          쓰레기 {useTrash} (l/월)의 양을 배출해 발생한 CO₂량은{" "}
          {((useTrash * 0.09) / familyNumber).toFixed(1)} kg-CO₂입니다.
        </Text>
      </Stack>
    </div>
  );
};

const Vehicle: React.FC = () => {
  const [useTime, setUseTime] = useState(1);
  const [useNum, setUseNum] = useState(1);
  return (
    <div>
      <Stack spacing={3}>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>버스 탑승시간(분/일)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useTime}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseTime(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useTime}
                onChange={(value) => setUseTime(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
          <div>
            <Text>버스 이용횟수(회/월)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useNum}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseNum(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useNum}
                onChange={(value) => setUseNum(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
        </InputGroup>
        <Text fontSize="xl" fontWeight={900} marginTop="1rem">
          버스 사용시간 {useTime} (분/일)의 시간을 월 {useNum} 회 탑승해 발생한
          CO₂량은{" "}
          {((useNum * useTime * 1071 * 22.2) / 60 / 69 / 1000).toFixed(1)}{" "}
          kg-CO₂입니다.
        </Text>
      </Stack>
    </div>
  );
};

const Life: React.FC = () => {
  const [familyNumber, setFamilyNumber] = useState(1);
  const [useTrash, setUseTrash] = useState(1);
  return (
    <div>
      <Stack spacing={3}>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>가족 수</Text>
            <Input
              htmlSize={4}
              width="24"
              type="number"
              variant="flushed"
              borderColor="gray.500"
              fontWeight={800}
              value={familyNumber}
            />
          </div>
          <InputGroup gap={1}>
            <Button
              colorScheme="blue"
              onClick={() => setFamilyNumber(familyNumber + 1)}
            >
              +
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                if (familyNumber > 1) setFamilyNumber(familyNumber - 1);
              }}
            >
              -
            </Button>
          </InputGroup>
        </InputGroup>
        <InputGroup gap={12} display="flex" alignItems="center">
          <div>
            <Text>쓰레기 배출량(l/월)</Text>
            <Flex>
              <NumberInput
                maxW="150px"
                mr="2rem"
                borderColor="blackAlpha.900"
                value={useTrash}
                onChange={(valueAsString, valueAsNumber) =>
                  setUseTrash(valueAsNumber)
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                width="10rem"
                min={1}
                max={99999}
                focusThumbOnChange={false}
                value={useTrash}
                onChange={(value) => setUseTrash(value)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" />
              </Slider>
            </Flex>
          </div>
        </InputGroup>
        <Text fontSize="xl" fontWeight={900} marginTop="1rem">
          쓰레기 {useTrash} (l/월)의 양을 배출해 발생한 CO₂량은{" "}
          {((useTrash * 0.09) / familyNumber).toFixed(1)} kg-CO₂입니다.
        </Text>
      </Stack>
    </div>
  );
};

export const pages: Array<{
  name: string;
  route: string;
  icon: IconType;
  children: React.FC;
}> = [
  { name: "수도", route: "water", icon: LuDroplet, children: Water },
  { name: "전기", route: "electricity", icon: LuPlug, children: Electricity },
  { name: "쓰레기", route: "trash", icon: LuTrash2, children: Trash },
  { name: "대중교통", route: "vehicle", icon: LuBus, children: Vehicle },
  { name: "일상생활", route: "life", icon: LuHeart, children: Life },
];
