import {
  Flex,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  Icon,
  Text,
} from "@chakra-ui/react";
import { UserIcon } from "./UserIcon";
import { FiSmile } from "react-icons/fi";

interface TextareaProps extends ChakraTextareaProps {
  value: string;
  maxLength?: number;
  userIcon?: string;
}

const minimalStyling = {
  border: "none",
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => {
    e.target.style.outline = "none";
    e.target.style.border = "none";
    e.target.style.boxShadow = "none";
  },
  padding: 0,
};

export const Textarea = ({
  userIcon,
  value,
  maxLength = 2200,
  ...props
}: TextareaProps) => {
  return (
    <Flex flexDir={"column"} justifyContent={"center"} flex={1}>
      {userIcon && <UserIcon name={userIcon} />}
      <ChakraTextarea
        resize={"none"}
        flex={7}
        value={value}
        maxLength={maxLength}
        color={"white"}
        {...minimalStyling}
        {...props}
      />
      <Flex
        flex={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={2}
      >
        <Icon
          mr="4"
          fontSize="20"
          _groupHover={{
            color: "text.primary",
          }}
          as={FiSmile}
          color={"white"}
        />
        <Text>{`${value.length}/${maxLength}`}</Text>
      </Flex>
    </Flex>
  );
};
