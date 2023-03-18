import { Flex, Stack, Text, Box, Icon } from "@chakra-ui/react";
import Image from 'next/image'
import React from 'react'

function ImageItem({ src, to, name, ...rest }) {

    return (
        <>
            <Stack
                display={"flex !important"}
                direction={"column"}
                alignItems={"center"}
                overflow={"auto"}
                {...rest}
            >
                <Image
                    css={{
                        borderRadius: "50px",
                        objectFit: 'cover',
                        boxSize: '50px',
                        borderRadius: '100%'
                    }}
                    width={50}
                    height={50}
                    src={src}
                    alt={name}
                    draggable={false}
                />
                <Text as={"span"} size={"sm"}>
                    {name}
                </Text>
            </Stack>
        </>
    )
}

export default ImageItem