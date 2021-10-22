import { connect } from "react-redux";
import Layout from "./Layout";

const mapStateToProps = ({ folder }) => ({
  folders: folder,
});

export default connect(mapStateToProps)(Layout);
