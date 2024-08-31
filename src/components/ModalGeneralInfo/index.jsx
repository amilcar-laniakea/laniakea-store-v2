import PropTypes from "prop-types";

import { Modal } from "antd";

import { ContextGlobalConsumer } from "@context/Global";

import "./style.scss";

const ModalGeneralInfo = ({ info }) => {
  const { isModalGeneralInfo, HandleModalGeneralInfo } =
    ContextGlobalConsumer();

  return (
    <Modal
      open={isModalGeneralInfo}
      wrapClassName="general-info-modal"
      title={info.title}
      onOk={HandleModalGeneralInfo}
      onCancel={HandleModalGeneralInfo}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <h3 className="general-info-modal-title">{info.subtitle}</h3>
      <h3 className="general-info-modal-title">{info.description}</h3>
      <h3 className="general-info-modal-title">{info.sub_description}</h3>
    </Modal>
  );
};

export default ModalGeneralInfo;

ModalGeneralInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
