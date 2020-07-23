import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { EventList } from "../../components/eventList/EventList";

import PersonalInfoTab from "../../components/PersonalInfoTab/PersonalInfoTab";
import TeamList from "../../components/teamList/TeamList";
import CardPersonalPage from "../../components/cardPersonalPage/CardPersonalPage";
const useStyles = makeStyles({
    container: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "40px auto 0 auto",
        maxWidth: 1000,
    },
    columnContainer: {
        width: "47%",
    },
});

function PersonalPage() {
    const classes = useStyles();
    return (
        <div>
            <PersonalInfoTab />
            <div className={classes.container}>
                <div className={classes.columnContainer}>
                    <CardPersonalPage title="UPCOMING...">
                        <EventList />
                    </CardPersonalPage>
                </div>
                <div className={classes.columnContainer}>
                    <TeamList />
                </div>
            </div>
        </div>
    );
}

export default PersonalPage;