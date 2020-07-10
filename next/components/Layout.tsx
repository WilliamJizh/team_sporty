import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

type Props = {
    children?: ReactNode;
    title?: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            // height: "80px",
        },
    }),
);
const Layout = ({ children, title = "Team Sporty" }: Props) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className={classes.header}>
                <AppBar>
                    <Toolbar>
                        <Link href="/">
                            <Button>Team</Button>
                        </Link>
                        <Link href="/profile">
                            <Button>Profile</Button>
                        </Link>
                        <Link href="/team">
                            <Button>Team</Button>
                        </Link>
                        <Link href="/calendar">
                            <Button>Calendar</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </header>
            {children}
            <footer>
                <hr />
                <span>I&apos;m here to stay (Footer)</span>
            </footer>
        </div>
    );
};

export default Layout;