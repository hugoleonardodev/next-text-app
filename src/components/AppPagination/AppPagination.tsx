// import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { BottomNavigation, Button, Pagination, PaginationItem } from '@mui/material'

import { useStyles } from '@common/hooks'
import { useBreakingBad } from '@contexts/BreakingBadContext'

const AppPagination: React.FC = () => {
    const styles = useStyles()
    // const router = useRouter()
    const { handlePageChange } = useBreakingBad()

    // const [currentPage, setCurrentPage] = React.useState('1')

    const reference = React.useRef()

    const handleChangePage = (page: string): void => {
        handlePageChange(page)
    }

    React.useEffect(() => {
        const navigationItems = document.getElementsByTagName('li')
        if (navigationItems.length === 10) {
            for (let index = 1; index < navigationItems.length - 2; index++) {
                navigationItems[index].addEventListener('click', () => {
                    // index === 1 && setCurrentPage(index.toString())
                    handleChangePage(navigationItems[index].innerText)
                })
            }
        }
    }, [handleChangePage])

    return (
        <BottomNavigation component="footer" className={styles.footerStyles}>
            <Pagination
                count={6}
                size="large"
                className={styles.paginationStyles}
                color="primary"
                ref={reference}
                // onChange={handleChangePage}
                // page={currentPage}
                // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
                renderItem={item => (
                    <PaginationItem {...item} key={item.page}>
                        <Button onClick={handleChangePage}>{item.page}</Button>{' '}
                    </PaginationItem>
                )}
            />
        </BottomNavigation>
    )
}

export default AppPagination
