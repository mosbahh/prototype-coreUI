import React, { Component } from "react";
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>Traffic {"&"} Sales</CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <Row>
                      <Col sm="2">
                        <div className="callout">
                          <small className="text-muted">CTR</small>
                          <br />
                          <strong className="h4">23%</strong>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br />
                          <strong className="h4">5%</strong>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br />
                          <strong className="h4">5%</strong>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br />
                          <strong className="h4">5%</strong>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br />
                          <strong className="h4">5%</strong>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br />
                          <strong className="h4">5%</strong>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <ul className="icons-list">
                      <li>
                        <i className="icon-screen-smartphone bg-info" />
                        <div className="desc">
                          <div className="title">Samsung Galaxy Edge</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.224</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-warning" />
                        <div className="desc">
                          <div className="title">iPhone 6S</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.163</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user bg-danger" />
                        <div className="desc">
                          <div className="title">Premium accounts</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>928</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-spotify bg-success" />
                        <div className="desc">
                          <div className="title">Spotify Subscriptions</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>893</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-cloud-download bg-danger" />
                        <div className="desc">
                          <div className="title">Ebook</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Downloads</div>
                          <strong>121.924</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning" />
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted">
                            <i className="icon-settings" />
                          </Button>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <Button
                          color="link"
                          size="sm"
                          className="text-muted"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="show more"
                        >
                          <i className="icon-options" />
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <br />
                {/* <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">
                        <i className="icon-people" />
                      </th>
                      <th>User</th>
                      <th className="text-center">Country</th>
                      <th>Usage</th>
                      <th className="text-center">Payment Method</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/1.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/USA.png"}
                          alt="USA"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-mastercard"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/2.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Avram Tarasios</div>
                        <div className="small text-muted">
                          <span>Recurring</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/Brazil.png"}
                          alt="Brazil"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="10"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-visa"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>5 minutes ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/3.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-warning" />
                        </div>
                      </td>
                      <td>
                        <div>Quintin Ed</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/India.png"}
                          alt="India"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="warning"
                          value="74"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-stripe"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>1 hour ago</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/4.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-secondary" />
                        </div>
                      </td>
                      <td>
                        <div>Enéas Kwadwo</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/France.png"}
                          alt="France"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>98%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="98"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-paypal"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last month</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/5.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-success" />
                        </div>
                      </td>
                      <td>
                        <div>Agapetus Tadeáš</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/Spain.png"}
                          alt="Spain"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>22%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="22"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-google-wallet"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Last week</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img
                            src={"img/avatars/6.jpg"}
                            className="img-avatar"
                            alt="admin@bootstrapmaster.com"
                          />
                          <span className="avatar-status badge-danger" />
                        </div>
                      </td>
                      <td>
                        <div>Friderik Dávid</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <img
                          src={"img/flags/Poland.png"}
                          alt="Poland"
                          style={{ height: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>43%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">
                              Jun 11, 2015 - Jul 10, 2015
                            </small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="43"
                        />
                      </td>
                      <td className="text-center">
                        <i
                          className="fa fa-cc-amex"
                          style={{ fontSize: 24 + "px" }}
                        />
                      </td>
                      <td>
                        <div className="small text-muted">Last login</div>
                        <strong>Yesterday</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
