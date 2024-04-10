import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function Exercise({ bmiResult }) {
  return (
    <Card sx={{maxWidth:"27vw"}} style={{background:"#e5d1d4",padding:"30px",lineHeight:"1000px",fontSize:"20px"}}>
    
    
      <CardActionArea>
        <CardMedia/>
       
        <div className='Aman'>
        {bmiResult >=25 && (
  <div>
    <h2 className='A'>Exercise for Fat loss Person</h2>
<img src="https://i.pinimg.com/736x/fb/a1/0c/fba10cb7f2790255c7e9c99facc67a3c.jpg" alt="" height={550} width={500} />
  </div>
)}

{bmiResult >= 18 && bmiResult < 25 && (
  <div>
    <h2 className='A'>Exercise for Healthy Person </h2>
<img src="https://thumbs.dreamstime.com/z/yoga-man-vector-men-yogi-character-training-flexible-exercise-pose-illustration-male-set-healthy-person-lifestyle-workout-161860423.jpg" alt="" height={550} width={500} />

  </div>
)}

{bmiResult  < 18 && (
  <div>
    <h2 className='A'>Exercise for Weight gaining Person</h2>
<img src="https://i.pinimg.com/564x/37/3a/37/373a3743f3cf7bf765be8c586b6e6cce.jpg" alt="" height={750} width={500} />
   
  </div>
)}
    </div>
       
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}







// <div className='Aman'>
// {bmiResult >=25 && (
// <div>
// <h2 className='A'>Exercise for Fat loss Person</h2>
// A fat loss workout should focus on burning calories, increasing metabolism, and promoting muscle growth. Here's a sample fat loss workout routine:

// Warm-Up (5-10 minutes):

// Jogging or brisk walking on the treadmill
// Jumping jacks
// Arm circles
// Leg swings
// High-Intensity Interval Training (HIIT) Circuit (20-30 minutes): Perform each exercise for 30-45 seconds, followed by 15-30 seconds of rest. Complete the circuit 2-3 times with minimal rest between exercises.

// Burpees
// Jump squats
// Mountain climbers
// Jumping lunges
// High knees
// Plank jacks
// Bicycle crunches
// Russian twists
// Strength Training (20-30 minutes): Complete 3 sets of 10-12 repetitions for each exercise with a moderate weight.

// Squats
// Deadlifts
// Dumbbell lunges
// Bench press
// Bent-over rows
// Shoulder press
// Tricep dips
// Bicep curls
// Cardiovascular Exercise (15-20 minutes): Choose one or a combination of the following cardio exercises:

// Running on the treadmill
// Cycling
// Rowing machine
// Jump rope
// Stair climber
// Perform cardio at a moderate to high intensity, aiming to elevate your heart rate and break a sweat.

// Cool Down and Stretching (5-10 minutes):

// Slow jogging or walking to gradually lower heart rate
// Static stretching focusing on major muscle groups (hamstrings, quadriceps, calves, chest, back, shoulders)

// </div>
// )}

// {bmiResult >= 18 && bmiResult < 25 && (
// <div>
// <h2 className='A'>Exercise for Healthy Person </h2>
// 1. Stretching Routine:

// Forward Fold: Stand with feet hip-width apart, hinge at the hips, and fold forward, reaching towards the floor or shins.
// Downward Dog: Start in a plank position, then lift your hips towards the ceiling, forming an inverted V shape with your body.
// Quadriceps Stretch: Stand tall, bend one knee, and bring your foot towards your glutes, holding the ankle or foot behind you.
// Hamstring Stretch: Sit on the floor with one leg extended and the other bent, reach towards the extended foot, keeping the back straight.
// Shoulder Stretch: Bring one arm across the chest and use the opposite hand to gently press the arm towards the body.
// Cat-Cow Stretch: Start on your hands and knees, arch your back upwards like a cat, then drop your belly towards the floor, lifting your head and tailbone like a cow.
// 2. Yoga or Pilates:

// Sun Salutations: Flow through a series of poses including downward dog, plank, cobra/upward dog, and forward fold.
// Warrior Poses: Warrior I, II, and III are excellent for toning leg muscles, improving balance, and increasing flexibility.
// Pilates Hundred: Lie on your back, lift your legs off the ground, and pump your arms up and down while engaging your core.

// </div>
// )}

// {bmiResult  < 18 && (
// <div>
// <h2 className='A'>Exercise for Weight gaining Person</h2>
// <ul>
// <li><h3>Day 1: Upper Body Strength</h3></li>
// <li> Bench Press: 3 sets x 8-10 reps</li>
// <li>Bent-over Rows: 3 sets x 8-10 reps</li>
// <li>Shoulder Press: 3 sets x 8-10 reps</li>
// <li>Pull-Ups or Lat Pulldowns: 3 sets x 8-10 reps</li>
// <li>Dumbbell Bicep Curls: 3 sets x 10-12 reps</li>
// <li>Tricep Dips: 3 sets x 10-12 reps</li>
// </ul>
// <h3>Day 2: Lower Body Strength</h3>
// <ul>
// <li> Squats: 4 sets x 8-10 reps</li>
// <li> Deadlifts: 4 sets x 8-10 reps</li>
// <li> Lunges: 3 sets x 10-12 reps per leg</li>
// <li> Leg Press: 3 sets x 10-12 reps</li>
// <li> Calf Raises: 4 sets x 12-15 reps</li>
// </ul>
// <h3>Day 3: Rest or Active Recovery</h3>
// <h3>Day 4: Push Workout</h3>
// <ul>
// <li>Incline Bench Press: 3 sets x 8-10 reps
// Dumbbell Flyes: 3 sets x 10-12 reps
// Overhead Dumbbell Press: 3 sets x 8-10 reps
// Lateral Raises: 3 sets x 10-12 reps
// Tricep Pushdowns: 3 sets x 10-12 reps
// Push-Ups: 3 sets to failure</li>
// </ul>
// <h3>Day 5: Pull Workout</h3>
// <ul>
// <li>Pull-Ups: 4 sets to failure</li>
// <li>Barbell Rows: 3 sets x 8-10 reps</li>
// <li>Seated Cable Rows: 3 sets x 10-12 reps</li>
// <li>Face Pulls: 3 sets x 12-15 reps</li>
// <li>Hammer Curls: 3 sets x 10-12 reps</li>
// <li>Preacher Curls: 3 sets x 10-12 reps</li>
// </ul>
// <h3>Day 6: Legs and Abs</h3>
// <ul>
// <li>Leg Press: 4 sets x 8-10 reps</li>
// <li>Romanian Deadlifts: 3 sets x 8-10 reps</li>
// <li>Leg Curls: 3 sets x 10-12 reps</li>
// <li>Walking Lunges: 3 sets x 10-12 reps per leg</li>
// <li>Standing Calf Raises: 4 sets x 12-15 reps</li>
// <li>Planks: 3 sets, hold for 60 seconds</li>
// <h3>Day 7: Rest</h3>

// </ul>
// </div>
// )}
// </div>