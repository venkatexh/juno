"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Space } from "@/components/space/types/SpaceTypes";
import { TextLarge } from "@/components/reusables/texts/Texts";
import SpaceCard from "@/components/space/SpaceCard";

const SpacePage = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      const response = await axios.get(`${baseURL}/spaces`, {
        params: {
          userId: "4e9b79b4-c7e9-4d04-b709-92feafebacdf",
        },
      });
      setSpaces(response.data);
    };
    fetchSpaces();
  }, []);

  return (
    <div>
      <TextLarge>Your spaces</TextLarge>
      <div className='flex flex-wrap gap-12 my-6'>
        {spaces.map((space: Space) => (
          <SpaceCard
            key={space.id}
            id={space.id}
            name={space.name}
            description={space.description}
            imageURL={
              "https://images.unsplash.com/photo-1624725412168-a8e69d4f7b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SpacePage;
