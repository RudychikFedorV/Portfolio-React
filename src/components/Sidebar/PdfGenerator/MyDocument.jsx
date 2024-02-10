import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Home } from "../../../pages/Home/Home";


const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});

const MyDocument = ({ route, params }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>{route}</Text>
        </View>
        <View style={styles.content}>
          <Text>{JSON.stringify(params)}</Text>
        </View>
        <View style={styles.content}>
          <Home />
        </View>
      </Page>
    </Document>
    );
    return (
    <div>
      <button onClick={handleDownloadPDF}>Скачать PDF</button>
    </div>
  );
};

export default MyDocument;
