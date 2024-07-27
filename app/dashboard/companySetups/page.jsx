import React from "react";
import styles from "./companySetups.module.css";

const CompanySetups = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div>
          <label className={styles.label}>Company Name</label>
          <input
            type="text"
            name="company_name"
            id="company_name"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Address 1</label>
          <input
            type="text"
            name="address1"
            id="address1"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Address 2</label>
          <input
            type="text"
            name="address2"
            id="address2"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Select State</label>
          <select name="state_id" id="state_id">
            <option value="">Select State</option>
            <option value="32">ANDAMAN &amp; NICOBAR</option>
            <option value="1">ANDHRA PRADESH</option>
            <option value="3">ARUNACHAL PRADESH</option>
            <option value="2">ASSAM</option>
            <option value="5">BIHAR</option>
            <option value="31">CHANDIGARH</option>
            <option value="35">CHATTISGARH</option>
            <option value="30">DADRA &amp; NAGAR</option>
            <option value="29">DAMAN &amp; DIU</option>
            <option value="25">DELHI</option>
            <option value="26">GOA</option>
            <option value="4">GUJRAT</option>
            <option value="6">HARYANA</option>
            <option value="7">HIMACHAL PRADESH</option>
            <option value="8">JAMMU &amp; KASHMIR</option>
            <option value="34">JHARKHAND</option>
            <option value="9">KARNATAKA</option>
            <option value="10">KERALA</option>
            <option value="28">LAKSHDWEEP</option>
            <option value="11">MADHYA PRADESH</option>
            <option value="12">MAHARASHTRA</option>
            <option value="13">MANIPUR</option>
            <option value="14">MEGHALAYA</option>
            <option value="15">MIZORAM</option>
            <option value="16">NAGALAND</option>
            <option value="17">ORISSA</option>
            <option value="27">PONDICHERY</option>
            <option value="18">PUNJAB</option>
            <option value="19">RAJASTHAN</option>
            <option value="20">SIKKIM</option>
            <option value="21">TAMIL NADU</option>
            <option value="22">TRIPURA</option>
            <option value="23">UTTAR PRADESH</option>
            <option value="33">UTTARAKHAND</option>
            <option value="24">WEST BENGAL</option>
          </select>
        </div>
        <div>
          <label className={styles.label}>Contact Person Name</label>
          <input
            type="text"
            name="contact_person_name"
            id="contact_person_name"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Contact Number</label>
          <input
            type="text"
            name="contact_no"
            id="contact_no"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Email Address</label>
          <input
            type="email"
            name="email_address"
            id="email_address"
            defaultValue="vibha@gmail.com"
            disabled
          />
        </div>
        <div>
          <label className={styles.label}>Adhar Card Number</label>
          <input
            type="text"
            name="aadharcard_no"
            id="aadharcard_no"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>Company PAN Number</label>
          <input
            type="text"
            name="pan_number"
            id="pan_number"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>DL No</label>
          <input
            type="text"
            name="dl_number"
            id="dl_number"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div>
          <label className={styles.label}>GST Number</label>
          <input
            type="text"
            name="gst_number"
            id="gst_number"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div className={styles.has}>
          <label className={styles.label}>CST TIN No</label>
          <input
            type="text"
            name="cst_tin_number"
            id="cst_tin_number"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div className={styles.has}>
          <label className={styles.label}>MVAT No</label>
          <input
            type="text"
            name="m_vat_no"
            id="m_vat_no"
            defaultValue="Vibha Healthcare "
          />
        </div>
        <div className={styles.has}>
          <label className={styles.label}>Has composition Scheme of GST?</label>
          <select name="has_composition" id="has_composition">
            <option value="Default">Select Default</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default CompanySetups;
