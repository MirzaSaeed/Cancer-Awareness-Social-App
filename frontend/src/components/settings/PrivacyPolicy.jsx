import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box>
        <Box style={{ margin: "0 auto", maxWidth: "800px" }}>
          <Typography variant="h5">Privacy Policy</Typography>

          <Typography
            sx={{ color: "#8A8D94" }}
            pb={2}
            variant="body1"
            component="p"
          >
            Last updated July 08, 2023
          </Typography>
          <Divider sx={{ background: "#909BAD" }} />
          <Box>
            <Typography variant="body1" component="p" mt={4}>
              This privacy notice for Medical Domain ('we', 'us', or 'our'),
              describes how and why we might collect, store, use, and/or share
              ('process') your information when you use our services
              ('Services'), such as when you: Visit our website, or any website
              of ours that links to this privacy notice Engage with us in other
              related ways, including any sales, marketing, or events
            </Typography>
            <Typography variant="body1" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                Questions or concerns?{" "}
              </strong>
              Reading this privacy notice will help you understand your privacy
              rights and choices. If you do not agree with our policies and
              practices, please do not use our Services.
            </Typography>
            <Typography variant="h6" pt={2}>
              Summary
            </Typography>
            <Typography variant="body2" component="p" mt={1}>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for.
            </Typography>
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                What personal information do we process?{" "}
              </strong>
              When you visit, use, or navigate our Services, we may process
              personal information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use. Learn more about personal information you disclose to us.
            </Typography>
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                Do we process any sensitive personal information?{" "}
              </strong>
              We may process sensitive personal information when necessary with
              your consent or as otherwise permitted by applicable law. Learn
              more about sensitive information
            </Typography>
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                Do we receive any information from third parties?{" "}
              </strong>
              We do not receive any information from third parties.
            </Typography>
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                How do we process your information?{" "}
              </strong>
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent. We process your
              information only when we have a valid legal reason to do so. Learn
              more about how we process your information.
            </Typography>{" "}
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                In what situations and with which parties do we share personal
                information?{" "}
              </strong>
              We may share information in specific situations and with specific
              third parties. Learn more about when and with whom we share your
              personal information.
            </Typography>{" "}
            <Typography variant="body3" component="p" mt={2}>
              <strong style={{ fontWeight: "bold" }}>
                What are your rights?{" "}
              </strong>
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information. Learn more about your privacy rights.
            </Typography>
            {/* Rest of the content... */}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default PrivacyPolicy;
