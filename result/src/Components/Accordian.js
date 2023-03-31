import React from 'react'
import Eg from "./Eg";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default function Accordian() {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Eg />
                </View>
            </Page>
        </Document>
    )
}
