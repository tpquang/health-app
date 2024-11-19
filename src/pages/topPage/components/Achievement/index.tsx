interface AchievementProps {
  data: any;
}

const Achievement = ({ data }: AchievementProps) => {
  if (!data) return null;

  return (
    <section>
      {/* Achievement content */}
    </section>
  );
};

export default Achievement; 