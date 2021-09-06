import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.bgImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faCog} style={styles.icon} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vetri</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24} />
        </TouchableOpacity>
      </View>

      {/* Mileage*/}
      <View style={styles.battersection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.bateryImg}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>

      {/* status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
    </View>
  );
};

export default CartItem;
