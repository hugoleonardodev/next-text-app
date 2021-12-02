import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import * as React from 'react'

import Button from '@mui/material/Button'

import { useBreakingBad } from '@contexts/BreakingBadContext'

type TCharacterDetailsLinkProperties = {
    characterId: number
}

const ResponsiveDialog: React.FC<TCharacterDetailsLinkProperties> = ({ characterId }) => {
    const router = useRouter()
    const { handleSelectCharacter } = useBreakingBad()

    const handleClickOpen = React.useCallback(() => {
        // eslint-disable-next-line prettier/prettier
        (async () => await handleSelectCharacter(characterId))()

        router.push(`/character/${characterId}`)
    }, [characterId, handleSelectCharacter, router])

    return (
        <Button variant="contained" onClick={handleClickOpen} color="secondary">
            <Image src="/eye_red.svg" alt="Picture of the author" width={36} height={36} />
        </Button>
    )
}

export default ResponsiveDialog
