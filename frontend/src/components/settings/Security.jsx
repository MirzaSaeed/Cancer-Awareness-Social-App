import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Divider,
  Typography,
  Switch,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#fff",
    "&:hover": {
      backgroundColor: alpha("#6373E5 ", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#6373E5 ",
  },
}));
const Security = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ background: "#1A202E" }}>
        <Grid spacing={2}>
          <Box>
            <Box style={{ margin: "0 auto", maxWidth: "800px" }} pb={2}>
              <Typography variant="h5">Security</Typography>

              <Typography
                sx={{ color: "#8A8D94" }}
                pb={2}
                variant="body1"
                component="p"
              >
                These settings help you keep your account secure.
              </Typography>
              {/* <Typography sx={{ color: "#8A8D94" }} >
            Select notification you want to receive
          </Typography> */}
              <Divider sx={{ background: "#909BAD" }} />
              <Paper
                sx={{
                  marginTop: "1rem",
                  background: "#0F131C",
                  color: "#fff",
                }}
              >
                <Box component="div" className="list-group-item">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ flex: "1 1 auto" }}>
                      <List>
                        <ListItem>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <ListItemText
                              primary="  Enable Activity Logs"
                              secondary="Donec id elit non mi porta gravida at eget metus"
                            />
                            <CustomSwitch defaultChecked />
                          </div>
                        </ListItem>
                        <ListItem>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <ListItemText
                              primary="2FA AuthenticationEnabled"
                              secondary="Maecenas sed diam eget risus varius blandit."
                            />

                            <Button
                              variant="contained"
                              size="small"
                              color="primary"
                            >
                              Disable
                            </Button>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <ListItemText
                              primary="Activate Pin Code"
                              secondary="Donec id elit non mi porta gravida at eget metus."
                            />

                            <CustomSwitch />
                          </div>
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Divider sx={{ background: "#909BAD" }} />
            <Typography variant="h6" pt={2}>
              Recent Activity
            </Typography>
            <Typography sx={{ color: "#8A8D94" }}>
              Last activities with your account.
            </Typography>
            <Paper
              sx={{
                marginTop: "1rem",
                background: "#0F131C",
                paddingBottom: "0.5rem",
              }}
            >
              <Table className="table border">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Device
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Location
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      IP
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Time
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ "&:hover": { background: "#161C24" } }}>
                    <TableCell sx={{ color: "#fff" }}>
                      <i className="fe fe-globe fe-12 text-muted mr-2"></i>
                      Chrome - Windows 10
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>Paris, France</TableCell>
                    <TableCell sx={{ color: "#fff" }}>192.168.1.10</TableCell>
                    <TableCell sx={{ color: "#fff" }}>Apr 24, 2019</TableCell>
                    <TableCell>
                      <Link to="#" className="text-muted">
                        <i className="fe fe-x"></i>
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ "&:hover": { background: "#161C24" } }}>
                    <TableCell sx={{ color: "#fff" }}>
                      <i className="fe fe-smartphone fe-12 text-muted mr-2"></i>
                      App - Mac OS
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>New York, USA</TableCell>
                    <TableCell sx={{ color: "#fff" }}>10.0.0.10</TableCell>
                    <TableCell sx={{ color: "#fff" }}>Apr 24, 2019</TableCell>
                    <TableCell>
                      <Link to="#" className="text-muted">
                        <i className="fe fe-x"></i>
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ "&:hover": { background: "#161C24" } }}>
                    <TableCell sx={{ color: "#fff" }}>
                      <i className="fe fe-globe fe-12 text-muted mr-2"></i>
                      Chrome - iOS
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>London, UK</TableCell>
                    <TableCell sx={{ color: "#fff" }}>255.255.255.0</TableCell>
                    <TableCell sx={{ color: "#fff" }}>Apr 24, 2019</TableCell>
                    <TableCell>
                      <Link to="#" className="text-muted">
                        <i className="fe fe-x"></i>
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Security;
