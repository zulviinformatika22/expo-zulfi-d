import { Image, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'mistyrose',
    }}>
      
      {/* Segitiga */}
      <View style={{
        width: 0,
        height: 0,
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 90,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'salmon',
        marginBottom: 20,
      }} />
{/* persegi panjang */}
<View style={{
  backgroundColor: 'plum',
  paddingHorizontal: 20,
  paddingVertical: 8,
  marginBottom: 20,
  width: 250,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <Image
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3737/3737570.png' }}
    style={{ width: 30, height: 30, marginBottom: 6 }} // gunakan marginBottom, bukan marginRight
  />
  <Text style={{
    fontSize: 16,
    color: "white",
    fontWeight: 'bold'
  }}>DZULVIANA</Text>
</View>


{/* Pill - stambuk */}
<View style={{
  backgroundColor: 'lightpink',
  paddingHorizontal: 20,
  paddingVertical: 8,
  borderRadius: 150,
  marginBottom: 20,
  width: 250,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <Image
    source={{ uri: 'https://images.icon-icons.com/1286/PNG/512/30_85244.png' }}
    style={{ width: 30, height: 30, marginBottom: 6 }} // gunakan marginBottom, bukan marginRight
  />
  <Text style={{
    fontSize: 16,
    color: "white",
    fontWeight: 'bold'
  }}>105841112222</Text>
</View>


 
</View>
  );
}