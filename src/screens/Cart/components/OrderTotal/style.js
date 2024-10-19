import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
      },
      head:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000',
        lineHeight: 50,
      },
      content:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#000',
        lineHeight: 25,
      },
      endContent:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#000',
        lineHeight: 25,
        marginBottom: 10,
      },
      headEnd:{
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#f2f2f2',
        lineHeight: 50,
      },
      total:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#000',
        lineHeight: 50,
      }

  });

export default style;
