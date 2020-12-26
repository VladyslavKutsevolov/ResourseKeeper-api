/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResourceInput = {
  id?: string | null,
  name: string,
  author: string,
  url: string,
};

export type ModelResourceConditionInput = {
  name?: ModelStringInput | null,
  author?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceConditionInput | null > | null,
  or?: Array< ModelResourceConditionInput | null > | null,
  not?: ModelResourceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateResourceInput = {
  id: string,
  name?: string | null,
  author?: string | null,
  url?: string | null,
};

export type DeleteResourceInput = {
  id?: string | null,
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  author?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelResourceFilterInput | null > | null,
  or?: Array< ModelResourceFilterInput | null > | null,
  not?: ModelResourceFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type CreateResourceMutation = {
  createResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type UpdateResourceMutation = {
  updateResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput,
  condition?: ModelResourceConditionInput | null,
};

export type DeleteResourceMutation = {
  deleteResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetResourceQueryVariables = {
  id: string,
};

export type GetResourceQuery = {
  getResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResourcesQuery = {
  listResources:  {
    __typename: "ModelResourceConnection",
    items:  Array< {
      __typename: "Resource",
      id: string,
      name: string,
      author: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateResourceSubscription = {
  onCreateResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResourceSubscription = {
  onUpdateResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResourceSubscription = {
  onDeleteResource:  {
    __typename: "Resource",
    id: string,
    name: string,
    author: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
