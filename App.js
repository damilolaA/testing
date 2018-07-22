/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const { width } = Dimensions.get("window");


class App extends Component {
  render() {
    const { containerStyle, textStyle, titleStyle, subTitleStyle, buttonStyle, buttonTextStyle } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView>
        <View>
          <Text style={titleStyle}>Terms Of Use</Text>
          <Text/>
          <Text style={textStyle}>
            These Terms of Use constitute an agreement (the “Agreement”) between you (“You”) and 
            Coca‑Cola Nigeria Limited (“Coca-Cola”), relating to your use of this Application 
            (“Coke Shop” “the Application”) (as defined below), which may allow You to facilitate 
            certain social interactions in connection with your online shopping or other internet-enabled 
            activities. 
            {"\n"}
            {"\n"}
            Please read this Agreement carefully. By using Coke Shop, You agree to be bound by terms and conditions set forth in this Agreement, 
            and Yyour use of this Application is also subject to the www.Coca-Cola.com Privacy Policy and User Agreement (collectively, the “Terms”).
            Certain features of the Coke Shopis may require You to be a member of Coca‑Cola’s or third-parties’ websites, or provide personal 
            information as part of a registration process, and such membership, registration and/or information disclosure may be governed by 
            additional terms and conditions set forth on such websites. 
            Third parties that own or operate any such websites are not responsible for this Application or the content thereof. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>1. DEFINITIONS</Text> {"\n"}
            {"\n"}
            Unless expressly specified and/or defined: {"\n"}
            “Application” means a desktop application, browser plug-in or so-called “bookmarklet” made available to You for installation, 
            download or use in connection with Coke Shop, 
            and any updates or revised or upgraded versions of any such application, plug-in or bookmarklet. {"\n"}

            “Content” means all content residing in the Application, excluding the Data. {"\n"}
            {"\n"}
            “Data” means all data, information, functionality and content that You upload to or post on the Application, or is uploaded 
            and posted on Your behalf, including, but not limited to, poll questions, product specifications, product descriptions, reviews, 
            photographs, images, Marks and other user-generated content. 
            “Data” also includes, without limitation, Data that You have uploaded from your device(s) and Data that You elect to post from 
            third party websites. {"\n"}
            {"\n"}
            “Coca‑Cola Sites” means http://www.Coca-Cola.com and any other url(s) maintained by or on behalf of Coca‑Cola or its affiliates. {"\n"}
            {"\n"}
            “Intellectual Property” means, with respect to any software, code, data or other asset of any kind, all copyright, patent, trademark, 
            trade secret, moral rights, termination, authorship and other proprietary rights now known or hereafter developed, or applications for 
            any of the foregoing rights, relating to any such software, code, data or other asset, including, without limitation, all rights necessary 
            for the worldwide development, manufacture, modification, enhancement, sale, licensing, use, reproduction, publishing and display of such software, 
            code, data or other asset. {"\n"}
            {"\n"}
            “Marks” means any trademarks, service marks, names, logos, or other graphics or branding elements. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>2. IMPLEMENTATION</Text>{"\n"}
            {"\n"}
             Coca‑Cola may make available to You an Application in connection with Coke Shop. If You elect to install, download or use the Application, 
             You agree that this Agreement does not grant You any Intellectual Property in or to the Application, and any copies You might make of the Application, 
             other than a limited, personal right to use the Application in connection with Your Coke Shop activities that will terminate upon the termination of this Agreement.{"\n"}
             {"\n"}
             You acknowledge that Your use of the Application is voluntary and at Your own risk. {"\n"}
             You may not: (a) modify, copy, publish, license, sell or otherwise commercialize this 
             Application or any Content or software associated with this Application; (b) rent, lease or otherwise transfer rights to this Application; 
             or (c) use this Application in any manner that could impair any Coca‑Cola sites in any way or interfere with any third party’s use or enjoyment of any 
             Coca‑Cola Site. Coca‑Cola makes no guarantees with respect to the availability or uptime of the Application. Coca‑Cola may conduct maintenance on or change 
             the method of access to the Application, at any time with or without notice to You.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>3. DATA RIGHTS & OBLIGATIONS </Text>{"\n"}
             {"\n"}
            You represent that any Data that You upload to or post on the Application shall be free from any spyware, malware, virus, worm, Trojan horse, or other malicious 
            or harmful code, and that You own or otherwise have the unconditional right to upload or post such Data. You hereby grant to Coca‑Cola and its affiliates a non-exclusive, 
            worldwide, perpetual, irrevocable, limited, royalty-free, sub-licensable (through multiple tiers) and transferable right and license to exercise the copyright, trademark, 
            patent, publicity, database, and all other Intellectual Property rights in the Data, as well as the right to host, cache, route, transmit, store, copy, modify, reproduce, 
            distribute, publish, translate, use, publicly perform, publicly display, reformat, excerpt, analyze, and create derivative works of the Data, in any media known now or in 
            the future, including any Coca‑Cola Site, or application or other property owned, operated or provided by Coca‑Cola or its affiliates. {"\n"}
            {"\n"}
            Coca‑Cola may elect to not display Data (or any portion thereof), in its sole discretion. Additionally, Coca‑Cola reserves the right to remove any Data from any media on 
            which it is displayed at any time, with or without notice to You, if, in its sole opinion, such Data conflicts with or is in breach of this Agreement or the nature or quality 
            of the Data is inconsistent with Coca‑Cola’s mission or standards. There are no implied licenses from Coca‑Cola under this Agreement.{"\n"}
            {"\n"}
            <Text style={subTitleStyle}>4. APPLICATION USE</Text>{"\n"}
            {"\n"}
            While using the Application, You will not: {"\n"}
            • violate any laws, third party rights or Coca‑Cola’s policies, such as these Prohibited and Restricted Items policies;{"\n"}
            • use our sites, services or tools if You are not able to form legally binding contracts, are under the age of 18, or are temporarily or indefinitely suspended from using any of our sites, services or tools;{"\n"}
            • post false, inaccurate, misleading, defamatory, or libelous content (including personal information);{"\n"}
            • distribute or post spam, unsolicited, or bulk electronic communications, chain letters, or pyramid schemes;{"\n"}
            • distribute viruses or any other technologies that may harm Coca‑Cola, or the interests or property of Coca‑Cola users;{"\n"}
            • copy, modify or distribute Content or Coca‑Cola’s Marks; or {"\n"}
            • harvest or otherwise collect information about individuals, including email addresses, without their consent.{"\n"}
            {"\n"}
            Please report problems, offensive content, and policy violations to Coca‑Cola using the feedback feature in the Application. Without limiting other remedies, 
            Coca‑Cola may limit, suspend or terminate Application access, service and/or user accounts, prohibit access to our sites and their content (including the Application and the Content), 
            services and tools, delay or remove hosted content, and take technical and legal steps to keep users off the Application if Coca‑Cola suspects that they are creating problems or possible legal 
            liabilities, infringing the intellectual property rights of third parties, or acting inconsistently with the letter or spirit of our policies. Coca‑Cola also reserves the right to modify or discontinue 
            the Application and any other websites, services or tools associated with Coke Shop.{"\n"}
            {"\n"}
            Additionally, Coca‑Cola may, in appropriate circumstances and at our discretion, suspend or terminate accounts of users who may be repeat infringers of intellectual property rights of third parties.{"\n"}
            {"\n"}
            This Application may utilize social networking or “share functionality” or may contain links to third party sites that are not owned or controlled by Coca‑Cola. We have no control over, and assume no responsibility for,
            any share or other social media functionality provided by third parties, or the content, privacy policies, or practices of any third party website. You are subject to the policies of those third parties when and where 
            applicable. By using this Application, You expressly relieve Coca‑Cola from any and all liability arising from Your use of any share or other social media functionality or third party website accessed from this Application. 
            Upon receipt of notice addressed to Coca‑Cola as directed below, we will delete any data about You, if any, that we receive from certain third parties’ websites that provide such social media functionality and, in the event 
            that we receive such notice from You, this Agreement will terminate automatically without further notice to You.{"\n"}
            {"\n"}
            <Text style={subTitleStyle}>5. INDEMNIFICATION</Text>{"\n"}
            {"\n"}
            You will indemnify and hold Coca‑Cola (and our affiliates and our and their officers, directors, agents, subsidiaries, joint ventures and employees) harmless from any claim or demand, including reasonable attorneys’ fees, 
            made by any third party due to or arising out of Your breach of this Agreement, or Your violation of any law or the rights of a third party in connection with the Data, Application or Coke Shop.{"\n"}
            {"\n"}

            <Text style={subTitleStyle}>6. TERRITORIAL COMPLIANCE</Text>{"\n"}
            {"\n"}
            Coke Shop offers no guarantee that items in the app store are appropriate or available for use in locations outside Nigeria, and accessing our app from territories where its contents are illegal or unlawful is prohibited and done at the user’s risk. 
            Ultimately, the user is responsible for ensuring that accessing or using the website or online store is done in accordance with applicable Local Laws.{"\n"}
            {"\n"}
            <Text style={subTitleStyle}>7. USE OF CREDIT OR DEBIT CARDS</Text>{"\n"}
            {"\n"}
            For all transactions involving the use of credit or debit cards in the ordinary course of business, Coke Shop will not be liable for information on the card which may be stored on its server or the server held by third parties 
            (payment gateway providers) or any payment platform running on its website. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>8. DELIVERY CHARGES</Text>{"\n"}
            {"\n"}
            The delivery charge does not include any applicable importation charges, taxes and duties by customs in the country where the order is to be delivered. You are responsible for such taxes and duties. We may occasionally provide special offers and promotions waiving delivery charges in certain circumstances. 
             We reserve the right to vary, cancel or extend special offers and promotions regarding delivery charges.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>9. ORDERS AND SPECIFICATIONS</Text>{"\n"}
             {"\n"}
             All orders are subject to availability and on a first-come first-served basis. We shall refund any payment made by you in the event that we cannot provide the item(s) you have ordered. We reserve the right to refuse to accept an order.
             In the unlikely event that we are out of stock when you place your order, you will be emailed to inform you of this cancellation.
             You shall be responsible for providing accurate details concerning your order e.g. addresses, email addresses, mobile number etc. Where you provided us with inaccurate details, you will be liable for any cause. 
             Our order process allows you to check and amend any error before submitting any order with us. We shall not be liable for all costs and expenses incurred by you due to inaccurate information submitted by you.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>10. PRICING/PRICING ERRORS</Text>{"\n"}
             {"\n"}
             Prices are exclusive of delivery charges, and are subject to change without notice. 
             Coke Shop reserves the right to amend any pricing errors displayed due to human error, computer malfunction or other reason. We will notify you of any error in pricing 
             and you may elect to not purchase any good/s where the price has been corrected.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>11. SECURITY</Text>{"\n"}
             {"\n"}
             Any personal information that you submit will be protected by our secure SSL payment gateway server, which uses 256-bit security technology to protect your online order Information. 
             This technology encrypts all information including your credit/debit card and all personal information passed from you through our application.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>12. INVOICE</Text>{"\n"}
             {"\n"}
             You will receive an email notification containing the details of your order within 2 – 15 minutes offrom the time you placing your order. In the event that you do not receive an email notification of this sort, 
             kindly contact our customer care line +xxx-xxx-xxxxxxx as this may mean your order has not been placed hence will not be processed for delivery.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>13. PLACEMENT OF ORDER AND CANCELLATION</Text>{"\n"}
             {"\n"}
             While orders may be placed for our products in the application store any time within 24 hours daily, the period of delivery is limited to the date included in your order. 
             Maximum delivery date is one month from when You place the order. {"\n"}
             {"\n"}
             <Text style={subTitleStyle}>14. CANCELLATION OF ORDER</Text>{"\n"}
             When we receive a customer order, we begin processing it them immediately. Once an order has been placed and paid for, Coke Shop is unable to accept a cancellation of the order later than ten minutes after the initial order placement of the order. 
             Coke Shop is also unable to process a refund in such circumstances, but this shall not affect the customers’ right to a refund where an ordered item is unavailable
             However, you are entitled to 3 days to cancel after you place an order, please note that cancellation after 3 days attract 5% management fee. {"\n"}
             {"\n"}
             <Text style={subTitleStyle}>15. PROBLEMS WITH YOUR ORDER</Text>{"\n"}
             {"\n"}
             We want you to have the best shopping experience, so if you have any problems with your order, please contact us via: Telephone: +xxx-xxx-xxxxxxx {"\n"}
             {"\n"}
             <Text style={subTitleStyle}>16. COMMUNICATING WITH YOU DURING ORDER PROCESSING</Text>{"\n"}
             {"\n"}
             While processing your order, we may need to contact you to discuss availability of some of your items and/or any placements we may wish to suggest to you. 
             Kindly indicate your preferred means of communication from: phone call, SMS or email. However, whichever medium you select, 
             we request you to be easily accessible to it so that you can respond promptly when contacted to enable us process and deliver your order timely. 
             Customers who cannot be reached easily may have their delivery rescheduled in order to avoid delay in the delivery of orders for other customers.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>17. ACCESS TO YOUR DELIVERY LOCATION</Text>{"\n"}
             {"\n"}
             While we shall endeavor to deliver your order directly to your doorstep or gate depending on the discretion of the dispatch officer, if access to your location is limited due to poor road condition, 
             flooding, road blocks, civil unrest or any other encumbrances, we shall require you to notify us in advance and also to meet our delivery officer at a convenient and more accessible location.
             Failure to notify us of any such limitations may result in a delay in the delivery of your order or rescheduling of your delivery or a cancellation of your order.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>18. MEETING OUR DELIVERY OFFICER</Text>{"\n"}
             {"\n"}
             In order to ensure timely deliveries, our delivery officers are mandated to wait for a maximum of 10 minutes for each customer to collect his or her order. If the customer is contacted either
             by phone calls or SMS and fails to respond or show up within the time period allowed, the delivery officer may leave. Another delivery attempt may be made after confirmation that the customer is available,
             but this may attract extra charge. Coke Shop shall however not be liable for any damage caused to any order as a result of the additional time it has taken to deliver the order due to non-availability of the customer to take the initial delivery.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>19. RETURNS</Text>{"\n"}
             {"\n"}
             In the event that we deliver an incorrect or damaged item and the error is on our part, we shall immediately replace the item at no additional cost to you. However, you will need to notify our delivery officer of your 
             observations at the point of delivery. Once customers have taken delivery of their order and signed in confirmation of this (this shall be a signature or name anywhere on the invoice or waybill), they are deemed to have
             taken ownership of the item(s) and Coke Shop will not accept returns. For this reason, we ask customers to carefully check and confirm the accuracy of their order with our delivery officers before acknowledging receipt.
             Similarly, Coke Shop will not accept returns for items that have no material damage to them. Products that are materially intact but whose packaging may have suffered scratches, peels, tearing, dents, discoloration, 
             rust, or any other aesthetic impairment that does not affect the taste, functionality or integrity of the actual product may not be accepted by Coke Shop if returned. {"\n"}
             {"\n"}
             <Text style={subTitleStyle}>20. TREATMENT OF OUR EMPLOYEES</Text>{"\n"}
             {"\n"}
             While our employees will make extra effort to ensure our customers are satisfied with our services, we expect that our customers will accord the same courtesy and respect to all our employees. 
             On no account should our employees be subjected to any written or verbal abuse. Coke Shop reserves the right to report any incidence of abuse or acts of aggression against our staff to the appropriate law enforcement authorities.{"\n"}
             {"\n"}
             <Text style={subTitleStyle}>21. DISCLAIMER OF WARRANTIES.</Text>{"\n"}
             {"\n"}
             Except to the extent required by applicable law, (I) Coca‑Cola disclaims all warranties, express, implied or statutory, including, without limitation, any and all implied warranties of merchantability, accuracy, results of use, reliability, title,
             interference with quiet enjoyment, non-infringement of third-party rights, fitness for a particular purpose or other benefit that you might obtain through your participation in this agreement and (ii) The application is provided “as is” without
             warranty of any kind and you are solely responsible for any damages to your hardware device(s) or loss of data that results from the download or use of this application. Further, Coca‑Cola disclaims any warranty that use of the application will be uninterrupted or error-free. 
             Coca-Cola does not guarantee the accuracy of content, and will not assume any liability for application users’ (1) Purchase decisions (and the subsequent use of purchased products and services) that may be informed by the information provided in the application or its content or
            (2) Third parties’ content, actions or inactions, or your interactions with any third parties in connection with the application or coke shop. If you have a dispute with one or more third parties in 
            connection with your use of the application or coke shop, you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages 
            (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>22. LIMITATION OF LIABILITY</Text>{"\n"}
            {"\n"}
            Some jurisdictions do not allow limitations on liability. Only limitations that are lawful in the applicable jurisdiction will apply to you and Coca‑Cola's liability will be limited to the maximum extent permitted by law.
            Coca‑Cola will have no direct, consequential, special, indirect, exemplary, statutory, punitive, or other liability whether in contract, tort or any other legal theory, under this agreement or otherwise in connection with the application or coke shop, whether or not advised of the possibility of 
            such liability and notwithstanding any failure of essential purpose of any limited remedy. In the event that the above is not enforceable, Coca‑Cola’s aggregate liability under this agreement or otherwise in connection with the application or coke shop is limited to $100.
            The foregoing limitations shall apply to all claims arising from this agreement, the application and/or coke shop.{"\n"}
            {"\n"}
            <Text style={subTitleStyle}>23. TERM, SUSPENSION, TERMINATION, SURVIVAL</Text>{"\n"}
            {"\n"}
            The term of this Agreement will begin on the date on which You accept this Agreement online. It will continue until terminated in accordance with this Agreement. If You wish to terminate this Agreement, You must uninstall and delete the Application, and any copy thereof, and cease all use of the
            Application and Coke Shop; any other methods used by You to terminate the Agreement will be void and will not result in a termination. In addition, this Agreement will terminate automatically without notice if You fail to comply with any of its terms. The right to use the Application that is 
            granted hereunder is dependent on Your compliance with this Agreement and terminates automatically if You fail to comply with the terms. Coca‑Cola reserves the right to terminate or suspend this Agreement for any or no reason at any time upon notice to You and without liability to You. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>24. TERMS CHANGE </Text>{"\n"}
            {"\n"}
            Coca‑Cola reserves the right to make changes to this Application or Terms from time to time. Any material changes will take effect immediately for new users and upon the expiration of thirty (30) days after posting within the Application for current users.
            If You do not agree to any change, please uninstall and discontinue using this Application. Any use of this Application after the thirty (30) day notice period constitutes Your acceptance of any change. {"\n"}
            {"\n"}
            <Text style={subTitleStyle}>25. MISCELLANEOUS</Text> {"\n"}
            {"\n"}
            Coca‑Cola does not sell or rent Your personal information to third parties for their marketing purposes without Your explicit consent. Coca‑Cola uses Your information only as described in the Coca‑Cola Privacy Policy. Coca‑Cola
            stores and processes Your information on computers located in the United States that are protected by physical as well as technological security devices. You can access and modify certain information You provide Coca‑Cola, as enabled by the Application’s functionalities.
            Coca‑Cola uses third parties to verify and certify our privacy principles. For a complete description of how Coca‑Cola uses and protects Your personal information, see the Coca‑Cola Privacy Policy.
            If You object to Your information being transferred or used in this way please do not use the Application.{"\n"}
            {"\n"}
            Any notice to Coca‑Cola regarding these Terms and Conditions and the Coke Shop must be sent to Coca-Cola Nigeria Limited, 16, Gerrard Road, Ikoyi, Lagos, Nigeria, Attention: Legal Counsel,
            via first class or air mail or overnight courier, and is deemed given upon receipt. {"\n"}
            {"\n"}
            No agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship is intended or created by this Agreement. There are no third-party beneficiaries hereunder.{"\n"}
            {"\n"}
            If any provision of the Agreement shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so 
            that the Agreement shall otherwise remain in full force and effect and enforceable.{"\n"}
            {"\n"}
            You are responsible for complying with trade regulations and both foreign and domestic laws. You represent and warrant that You are not located in a country that is subject to a US Government embargo, or that has been designated by 
            the US Government as a “terrorist supporting” country and You are not listed on any US Government list of prohibited or restricted parties. {"\n"}
            {"\n"}
            This Application or its underlying technology may not be downloaded to or exported or re-exported: (a) into (or to a resident or national of) Cuba, Iraq, Iran, Libya, North Korea, Syria or any other country subject to United States embargo;
            (b) to anyone on the US Treasury Department’s list of Specially Designated Nationals or on the US Commerce Department’s Denied Party or Entity List; and (c) You will not export or re-export this 
            Application to any prohibited country, person, end-user or entity specified by US Export Laws. {"\n"}
            {"\n"}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.onBUttonPress}
            style={buttonStyle}
          >
            <Text style={buttonTextStyle}>Click To Accept</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  subTitleStyle: {
    fontWeight: "500"
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "300",
    paddingRight: 5
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 50,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "300",
    color: 'black',
  },
}

export default App;
