import { Model } from "mongoose";

export class QueryFeatures {
  query: any;
  queryString: any;

  constructor(
    query: any,
    queryString: any
  ) {
    this.query = query;
    this.queryString = queryString;
  }

  search(fields: string[]) {
    const keyword =
      this.queryString.search;

    if (keyword) {
      this.query = this.query.find({
        $or: fields.map((field) => ({
          [field]: {
            $regex: keyword,
            $options: "i",
          },
        })),
      });
    }

    return this;
  }

  filter() {
    const queryObj = {
      ...this.queryString,
    };

    const excludedFields = [
      "search",
      "page",
      "limit",
      "sort",
    ];

    excludedFields.forEach(
      (field) =>
        delete queryObj[field]
    );

    this.query =
      this.query.find(queryObj);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      this.query =
        this.query.sort(
          this.queryString.sort
        );
    } else {
      this.query =
        this.query.sort(
          "-createdAt"
        );
    }

    return this;
  }

  paginate() {
    const page =
      Number(this.queryString.page) ||
      1;

    const limit =
      Number(
        this.queryString.limit
      ) || 10;

    const skip =
      (page - 1) * limit;

    this.query =
      this.query
        .skip(skip)
        .limit(limit);

    return this;
  }
}