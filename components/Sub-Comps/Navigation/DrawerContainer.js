import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image} from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Colors,Images,Spacing } from '../../../Styles'


export default function CustomDrawerContent(props) {
    return (     
      <DrawerContentScrollView {...props} style={{backgroundColor: Colors.LightGrey.color }}>        
         <View style={styles.mainContainer}>
          <View style={styles.ImageCont}>
            <Image source={Images.DefaultProfile} style={styles.Image}/>
          </View>
         <View style={styles.Container}>
          <Text style={styles.Text}> Username / First name </Text>
          <Text style={styles.Text}> UserEmail@Email.EM.AIL</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
        <DrawerItem label="Help"  style={styles.Text} onPress={() => alert('This modal will contain the break down information')} />
      </DrawerContentScrollView>
      
    );
  }
  const styles = StyleSheet.create({
    Text:{fontSize: Spacing.TextSizes.FieldText, color: Colors.White.color},
    Container:{alignItems: 'center', justifyContent: 'center',  paddingTop: 35},
    ImageCont:{height: '15%',alignItems: 'center', justifyContent: 'center'},
    Image: { width: 75, height: 75, borderRadius: 75/2 },
    mainContainer: {backgroundColor: Colors.LightGrey.color ,alignItems: 'center', justifyContent: 'center'},
  })
  