import React from 'react'
import { View, Text, FlatList, TouchableHighlight} from "react-native";
import AdminActiviyListView from './AdminActivitiyListView'
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

class AdminActivitiyList extends React.Component  {
    state = {displayCreateEventDialog: false};

    showCreateEventDialog = () =>
        this.setState({displayCreateEventDialog: true});    
    
    hideCreateEventDialog = () =>
        this.setState({displayCreateEventDialog: false});    

    openEventView =  (event ) =>
        this.props.navigation.navigate('AdminActivity',{event});
    
    render() {
        const {navigation:{navigate}} =this.props;

        return (
            <AdminActiviyListView 
                events= {events} 
                openEventView={this.openEventView}
                //navigate = {navigate} 
                showDialog = {this.showCreateEventDialog} 
                hideDialog = {this.hideCreateEventDialog} 
                displayDialog = {this.state.displayCreateEventDialog} 
            />
        )
    }
}

export default AdminActivitiyList

const participant = [
    {id: 1, name: 'מיכאל כהן'},
    {id: 2, name: 'דניאלה קציר'},
    {id: 3, name: 'האני מועלם'},
    {id: 4, name: 'יובל דנן'},
    {id: 5, name: 'אנה לובליאן'},
    {id: 6, name: 'יוסף לוי'},
    {id: 7, name: 'מיכאלה ברש'},
    {id: 8, name: 'איגור דלינסקי'},
    {id: 9, name: 'אהרון הכהן'},
    {id: 10, name: 'יהודה דהן'},
    {id: 11, name: 'שרה נתן'},
    {id: 12, name: 'טלי שחר'},
    {id: 13, name: 'מורן אורן'},
    {id: 14, name: 'כוכבה ליפקין'},
    {id: 15, name: 'ליאור סיגלר'},
]

const events = [
    {id: 1, participants: participant, date: '12-02-2018'},
    {id: 2, participants: participant.filter(x => x.id > 5), date: '20-02-2018'},
    {id: 3, participants: [], date: '22-02-2018'},
    {id: 4, participants: participant, date: '01-03-2018'},
    {id: 5, participants: [], date: '08-03-2018'},
    {id: 6, participants: participant.filter(x => x.id === 2), date: '12-02-2018'},
    {id: 7, participants: participant.filter(x => x.id < 5), date: '20-02-2018'},
    {id: 8, participants: participant.filter(x => x.id % 2 === 0), date: '22-02-2018'},
    {id: 9, participants: participant.filter(x => x.id > 5), date: '01-03-2018'},
    {id: 10, participants: participant.filter(x => x.id > 12), date: '08-03-2018'},
    {id: 11, participants: participant.filter(x => x.id > 5), date: '12-02-2018'},
    {id: 12, participants: participant.filter(x => x.id % 3 === 1), date: '20-02-2018'},
    {id: 13, participants: participant.filter(x => x.id > 13), date: '22-02-2018'},
    {id: 14, participants: [], date: '01-03-2018'},
    {id: 15, participants: participant.filter(x => x.id %5 === 0), date: '08-03-2018'},
    {id: 16, participants: participant, date: '12-02-2018'},
    {id: 17, participants: participant, date: '20-02-2018'},
    {id: 18, participants: participant, date: '22-02-2018'},
    {id: 19, participants: participant, date: '01-03-2018'},
    {id: 20, participants: participant, date: '08-03-2018'},
]