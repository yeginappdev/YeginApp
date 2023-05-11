import { StyleSheet, View, Pressable, Text, Image } from 'react-native';

export default function ImgHolder({ label, text, image }) {
    return (
      <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: '#FFB968' }]}>
        <Image source={image} style={styles.imageIcon} />
      </Pressable>
      <Text style={styles.textUnder}>{text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({ 
  buttonContainer: {
    width: 159,
    height: 141,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  button: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textUnder: {
    fontSize: 24,
  },
  imageIcon: {
    width: 110,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
