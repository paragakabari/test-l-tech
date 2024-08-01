"use client"
import { useRouter } from "next/navigation";

const page = ({ params: { locale } }) => {
  const router = useRouter();
  router.push(`${locale}/carrier/dashboard`)
  return;

};

export default page;
