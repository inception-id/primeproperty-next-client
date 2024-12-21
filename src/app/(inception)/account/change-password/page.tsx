import ChangePasswordForm from "@/app/(inception)/account/change-password/_components/ChangePasswordForm";

const ChangePasswordPage = () => {
  return (
    <section className="mt-12 lg:mt-16 p-4 lg:py-0">
      <h1 className="text-lg mb-4 font-semibold">Change password</h1>
      <ChangePasswordForm />
    </section>
  );
};

export default ChangePasswordPage;
