// import { useEffect } from 'react';
// import { PermissionsAndroid, Platform, Button, Alert } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const TestGeolocation = () => {
//   useEffect(() => {
//     requestLocationPermissions();
//   }, []);

//   const requestLocationPermissions = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         getCurrentLocation();
//       } else {
//         Alert.alert('Permission Denied', 'Location permission is required to fetch the location.');
//       }
//     } else {
//       getCurrentLocation();
//     }
//   };

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         Alert.alert('Location', `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
//       },
//       (error) => {
//         Alert.alert('Location Error', error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//     );
//   };

//   return <Button title="Get Current Location" onPress={getCurrentLocation} />;
// };

// export default TestGeolocation;
