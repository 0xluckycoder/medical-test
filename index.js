const aws = require('aws-sdk');
require('dotenv').config();

const comprehendMedical = new aws.ComprehendMedical({ region: 'us-east-2' });

const params = {
    Text: 'Pt is 87 yo woman, highschool teacher with past medical history that includes   - status post cardiac catheterization in April 2019.She presents today with palpitations and chest pressure.HPI : Sleeping trouble on present dosage of Clonidine. Severe Rash  on face and leg, slightly itchy  Meds : Vyvanse 50 mgs po at breakfast daily,             Clonidine 0.2 mgs -- 1 and 1 / 2 tabs po qhs HEENT : Boggy inferior turbinates, No oropharyngeal lesion Lungs : clear Heart : Regular rhythm Skin :  Mild erythematous eruption to hairline Follow-up as scheduled'
}

comprehendMedical.detectEntitiesV2(params, (error, data) => {
    if (error) console.log(error, error.stack);
    console.log(data);
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ComprehendMedical.html
// https://github.com/aws/aws-sdk-js-v3

/**
 * Detect Entities (Version 2) — Examine unstructured clinical text to detect textual references to medical information such as medical condition, treatment, tests and results, and medications. This version uses a new model and changes the way some entities are returned in the output. For more information, see DetectEntitiesV2.
 * Detect PHI — Examine unstructured clinical text to detect textual references to protected health information (PHI) such as names and addresses.
*/