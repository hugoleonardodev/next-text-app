/* eslint-disable prettier/prettier */
import * as React from 'react'

import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import AppModal from '@components/AppModal'
import { useBreakingBad } from '@contexts/BreakingBadContext'

const MAX_LIMIT_PER_PAGE = 10
const skeletonsLines = [...Array.from({ length: MAX_LIMIT_PER_PAGE }).keys()]

const AppTable: React.FC = () => {
    const { isLoading, characters } = useBreakingBad()
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="caption table">
                <caption>Breaking Bad Facts</caption>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading
                        ? skeletonsLines.map(skeleton => {
                            return (
                                <TableRow key={`loading-skeleton-${skeleton}`}>
                                    <TableCell component="th" scope="row">
                                        <Skeleton animation="wave" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Skeleton animation="wave" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Skeleton animation="wave" />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Skeleton animation="wave" />
                                    </TableCell>
                                </TableRow>
                            )
                        })
                        : characters.map(character => (
                            <TableRow key={`${character.char_id}-${character.name}`}>
                                <TableCell component="th" scope="row">
                                    {character.char_id}
                                </TableCell>
                                <TableCell align="left">{character.name}</TableCell>
                                <TableCell align="left">{character.status}</TableCell>
                                <TableCell align="left"><AppModal characterId={character.char_id} characterName={character.name}/></TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AppTable
