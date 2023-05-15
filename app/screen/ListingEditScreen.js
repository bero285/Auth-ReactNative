import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as yup from "yup";
import AppText from "../components/AppText/AppText";
import ErrorMessage from "../components/Forms/ErrorMessage";
import AppFormFill from "../components/Forms/AppFormFill";
import SubmitButton from "../components/Forms/SubmitButton";
import AppForm from "../components/Forms/AppForm";
import PickerItem from "../components/PickerItem";
import AppPicker from "../components/AppPicker";
import AppFormPicker from "../components/AppFormPicker";
import CameraComp from "../components/CameraComp";
import FormImagePicker from "../components/Forms/FormImagePicker";
import * as Location from "expo-location";
const validationSchema = yup.object().shape({
  title: yup.string().required().min(3).max(30).label("Title"),
  price: yup.string().required().min(1).max(7).label("Price"),
  category: yup.object().required().nullable().label("Category"),
  description: yup.string().required().min(10).max(255).label("description"),
  images: yup.array().min(1, "Please select at least one image"),
});

export default function LoginScreen() {
  const [Locati, setLocati] = useState();
  const getLocation = async () => {
    const { granted } = await Location.requestBackgroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    setLocati({ latitude, longitude });
  };
  useEffect(() => {
    getLocation();
  }, []);
  const categoreis = [
    {
      label: "furniture",
      value: 1,
    },
    {
      label: "Books",
      value: 2,
    },
    {
      label: "cameras",
      value: 3,
    },
    {
      label: "cars",
      value: 4,
    },
    {
      label: "Games",
      value: 5,
    },
    {
      label: "clothing",
      value: 6,
    },
    {
      label: "sports",
      value: 7,
    },
    {
      label: "Movies & music",
      value: 8,
    },

    {
      label: "others",
      value: 9,
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: "",
            images: [],
          }}
          onSubmit={(values) => console.log(Locati)}
          validationSchema={validationSchema}
        >
          {/* <CameraComp
           name="Image"
           onChangeImage={(uri)=>{} }
            /> */}

          <>
            <FormImagePicker name="images" />
            <AppFormFill
              name="title"
              autoCapitalize="none"
              // icon="email"
              placeholder="Title"
              autoCorrect={false}
              keyboardType="string"
              textContentType="string"
              // width="50%"
            />

            <AppFormFill
              name="price"
              autoCapitalize="none"
              // icon="lock"
              placeholder="Price"
              autoCorrect={false}
              keyboardType="numeric"
              textContentType="numeric"
              width="50%"
              // secureTextEntry
            />
            {/* 
        <AppPicker
      selectedItem={category}
      onSelectItem={ item => {setCategory(item)}}
      items={categoreis}
      //  icon="apps"
        placeholder="category"

        />
        <ErrorMessage title="category" /> */}
            <AppFormPicker
              items={categoreis}
              name="category"
              placeholder="category"
            />
            <AppFormFill
              name="description"
              autoCapitalize="none"
              // icon="lock"
              placeholder="Descritpion"
              autoCorrect={false}
              keyboardType="string"
              textContentType="string"
              maxLength={255}
              multiline
              numberOfLines={3}
              // secureTextEntry
            />

            <SubmitButton title="Post" />
          </>
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 60,
    height: 90,

    marginTop: 50,
    marginBottom: 20,
  },
});

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { Formik } from "formik";
// import { useFormikContext } from "formik";
// import * as yup from "yup";
// import AppTextInput from "../components/AppTextInput";
// import SubmitButton from "../components/Forms/SubmitButton";
// import ErrorMessage from "../components/Forms/ErrorMessage";
// import AppText from "../components/AppText/AppText";

// export default function ListingEditScreen(onSubmit) {
//   // const validationSchema = yup.object().shape({
//   //   title: yup.string().email().required().min(3).label("title"),
//   //   price: yup.number().required().min(4).max(7).label("price"),
//   //   category: yup.string().required().label("category"),
//   //   description: yup.string().required().min(4).max(255).label("description"),
//   // });
//   const validationSchema = yup.object().shape({
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(4).label("Password"),
//   });

//   return (
//     <View>
//       <Formik
//         initialValues={{ email: "", password: "", category: "", description: "" }}
//         onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//           <>
//             <AppTextInput
//               name="email"
//               autoCapitalize="none"
//               // icon="email"
//               onBlur={() => setFieldTouched("Email")}
//               placeholder="title"
//               autoCorrect={false}
//               onChangeText={handleChange("Email")}
//               keyboardType="Email"
//               textContentType="Email"
//               // touched
//             />
//             {/* <AppText>{errors.title}</AppText> */}
//             <ErrorMessage error={errors.email} visible={touched.email} />
//             <AppTextInput
//               name="price"
//               autoCapitalize="none"
//               // icon="lock"
//               onBlur={() => setFieldTouched("price")}
//               placeholder="Price"
//               autoCorrect={false}
//               keyboardType="numeric"
//               textContentType="numeric"
//               // touched
//               onChangeText={handleChange("Price")}
//               // secureTextEntry
//             />
//             <ErrorMessage error={errors.price} visible={touched.price} />
//             <SubmitButton title="Post" onPress={handleSubmit} />
//           </>
//         )}
//       </Formik>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
