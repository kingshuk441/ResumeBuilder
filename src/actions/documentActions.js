export const updateSkin = (skinCode) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async calls
    let db = getFirestore();

    let uid = getState().firebase.auth.uid;
    db.collection("resumes")
      .doc(uid)
      .set(
        {
          document: { skinCode: skinCode, uid: uid },
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "CHANGE_SKIN", skinCode: skinCode });
      });
  };
};
