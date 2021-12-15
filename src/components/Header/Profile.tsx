import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({showProfileData = true}: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Filipe Lima
          </Text>
          <Text color="gray.300" fontSize="small">
            datsfilipe@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar size="md" name="Filipe Lima" src="https://github.com/datsfilipe.png" />
    </Flex>
  )
}