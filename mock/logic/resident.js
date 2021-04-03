const data = require('../data');
const logic = require('.');

const query = () => data.residents;

const fetch = (residentId) => data.residents.find((r) => r.id === residentId);

const register = (
  name,
  birthday,
  gender,
  height,
  weight,
  allergies,
  medicalHistory,
  preference,
  lifeHistory,
  remarks
) => {
  const resident = {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  };

  resident.id = logic.util.createUniqueId();

  data.residents.push(resident);

  return resident;
};

const update = (
  residentId,
  {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  }
) => {
  console.log('更新前 data');
  console.log(data.residents);

  const resident = {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  };

  data.residents.find((r) => r.id === residentId);

  console.log('更新後 data');

  console.log(resident);

  return resident;
};

// const destory = (residentId) => {
//   console.log('削除前 data');
//   console.log(data.residents);
//   const fetch = (residentId) => data.residents.find((r) => r.id === residentId);
//   const residentId = { name };
//   console.log('削除後 data');
//   console.log(data.residents);
// };

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
// exports.destory = destory;
