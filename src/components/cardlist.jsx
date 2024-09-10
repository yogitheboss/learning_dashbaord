import React from "react";
import { Card } from "./card.jsx";

export const CardList = ({ items, type }) => {
  return (
    <div className="flex overflow-x-auto flex-nowrap py-4 px-2 space-x-4">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item._id} className="flex-shrink-0 min-w-[300px]"> {/* Ensures each card has a minimum width */}
            <Card
              id={item._id}
              title={item.title}
              description={item.description}
              createdBy={item.createdBy}
              createdAt={item.createdAt}
              originalFileName={item.originalFileName}
              enrolledStudents={item.enrolledStudents}
              isEnrollBtn={type === "student"}
              deleteAllowed={type === "teacher" || type === "student" ? false : true}
            />
          </div>
        ))
      ) : (
        <p className="text-blue-600 text-lg font-semibold mt-10">
          No items available to display.
        </p>
      )}
    </div>
  );
};
