import React from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './HomeStyle';
import Swiper from 'react-native-swiper'
import EventsListView from '../eventsList/EventsListView'
import {AnimatableView,AnimatableText} from '../AnimatableService'
import { WebBrowser } from 'expo';

const HomeView = (props) => {
    const { 
        activityView,
        myNextEvent,
        images,
        processEventsList,
        activityElements,
        notFirstTime
    } = props

    const allActivityButton = (
        <View style={styles.allActivityButton}>
            <TouchableOpacity onPress={activityView}>
                <View style={styles.opacityBtn} >
                    <Text style={styles.titleText}>ההתנדבויות שלי</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

    const swiperImages = (images) => (
        images.map((img,i)=>
        <TouchableOpacity 
        key={i} 
        style={styles.container}
        onPress={async() => {await WebBrowser.openBrowserAsync(img.imgUrl)}}
        >
            <Image style={styles.picture} source={{uri:img.imgUrl}}/>
            <Text style={styles.imageTitle}>{img.title}</Text>
        </TouchableOpacity>
        )
    )

    return (
        <ScrollView horizontal={false}>
            <View style={styles.container}>
                <AnimatableView 
                viewStyle={[styles.eventBox,{marginTop:13}]}
                duration={notFirstTime?1:1000}
                viewContent= { 
                    <View>
                        <AnimatableText 
                        textStyle={styles.textCenter}
                        textContent='ההתנדבויות הבאות'
                        />
                        <EventsListView
                        processEventsList={processEventsList}
                        activityElements={activityElements}
                        isNextEvents={true}
                        />
                    </View>
                }
                />
                <AnimatableView 
                viewStyle={[styles.eventBox,{backgroundColor:'#C2185B',borderColor:'#f2f2f2',paddingBottom:1}]}
                duration={notFirstTime?1:1250}
                viewContent= { 
                    <View>
                    <AnimatableText 
                    textStyle={[styles.textCenter,{color:'#FFFFFF'}]}
                    textContent='התנדבות הבאה שלי'
                    />
                    <Text style={[styles.textCenter,{color:'#FFFFFF'}]}>{myNextEvent ? (myNextEvent.caption + ' ב-' +myNextEvent.date) : 'לא קיימות התנדבויות'}</Text>
                    {allActivityButton}
                    </View>
                }
                />
                <AnimatableView 
                duration={notFirstTime?1:1500}
                viewContent= { 
                    <View>
                        <AnimatableText 
                        textStyle={[styles.textCenter,{paddingTop:5, paddingBottom:3}]}
                        textContent='באנו לשמח, תראו בעצמכם'
                        />
                        <View style={[styles.box, styles.swiper]}>
                        <Swiper
                        autoplay
                        autoplayTimeout={3.5}
                        loadMinimalLoader={<ActivityIndicator size='large' color='#C2185B'/>}  
                        activeDotColor={'#C2185B'}
                        dotColor={'#ffffff'}
                        showsButtons
                        nextButton={<Text style={styles.buttonText}>‹</Text>} 
                        prevButton={<Text style={styles.buttonText}>›</Text>}
                            >
                                {swiperImages(images)}
                            </Swiper>
                        </View>
                    </View>
                    }
                />
            </View>
        </ScrollView>
    )
}

export default HomeView