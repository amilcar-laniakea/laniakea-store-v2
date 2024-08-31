import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "@fireb";
import { isValidObject } from "./isValidObject";

const getById = async (collectionName, id) => {
  const collectionRequest = collection(db, collectionName);
  const productDocRef = doc(collectionRequest, id);
  const productSnapshot = await getDoc(productDocRef);

  if (productSnapshot.exists()) return { ...productSnapshot.data(), id };
  else return null;
};

const get = async (collectionName, queryParams) => {
  let hasAttributes;
  let whereParams;
  let queryRequest;

  if (isValidObject(queryParams))
    hasAttributes = Object.keys(queryParams).length > 0;

  if (hasAttributes) {
    whereParams = Object.keys(queryParams).map((key) => {
      if (
        key === "date" &&
        (queryParams[key] === "desc" || queryParams[key] === "asc")
      ) {
        return orderBy(key, queryParams[key]);
      }
      return where(key, "==", queryParams[key]);
    });
  }

  const collectionRequest = collection(db, collectionName);

  if (hasAttributes) {
    queryRequest = query(collectionRequest, ...whereParams);
  }

  const request = await getDocs(
    hasAttributes ? queryRequest : collectionRequest
  );

  return request.docs.map((item) => ({ ...item.data(), id: item.id }));
};

const ServiceAction = async ({ collectionName, queryParams }) => {
  let response;
  let docs;

  try {
    if (queryParams && typeof queryParams === "string") {
      docs = await getById(collectionName, queryParams);
    } else {
      docs = await get(collectionName, queryParams);
    }

    response = { status: "success", data: docs, error: null };
  } catch (error) {
    console.error("error", error);
    response = { status: "error", data: null, error };
  }

  return response;
};

export default ServiceAction;
