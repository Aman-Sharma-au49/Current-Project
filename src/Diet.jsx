import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Supplement.css';

export default function Diet({bmiResult}) {
  return (
    <Card sx={{maxWidth:"27vw"} } 
    style={{background:"#e5d1d4",padding:"30px",lineHeight:"2"}} >
    
    
      <CardActionArea>
        <CardMedia/>
       
        <CardContent>
          <Typography variant="body2">

<div className='Aman'>
        {bmiResult >=25 && (
  <div>

<h2 className='A'>Diet for Fat loss Person</h2>
<b>
Breakfast:
</b>

<ol>
<li> Scrambled eggs with spinach and tomatoes, served with a slice of whole-grain toast.</li>
<li> Greek yogurt parfait with mixed berries and a sprinkle of almonds.</li>
<li> Overnight oats made with rolled oats, almond milk, chia seeds, and sliced banana.</li>
</ol>
<b>Mid-Morning Snack:</b>
<ol> 

<li> Apple slices with almond butter.</li>
<li> Carrot and cucumber sticks with hummus.</li>
<li> Low-fat cottage cheese with pineapple chunks.</li>
</ol>
<b>Lunch:</b>
<ol>
<li> Grilled chicken breast salad with mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette dressing.</li>
<li> Quinoa salad with black beans, corn, bell peppers, avocado, and lime vinaigrette.</li>
<li> Turkey and vegetable stir-fry with broccoli, bell peppers, and brown rice.</li>
</ol>

<b>Dinner:</b>
<ol>
<li> Baked salmon with roasted sweet potatoes and steamed broccoli.</li>
<li> Lean beef stir-fry with snow peas, carrots, and quinoa.</li>
<li> Grilled tofu with sautéed kale, bell peppers, and cauliflower rice</li>
</ol>
  </div>
)}

{bmiResult >= 18 && bmiResult < 25 && (
  <div>
    <h2 className='A'>Diet for Healthy Person</h2>
    <b>Breakfast:</b>
<ol>
<li>Greek yogurt parfait with mixed berries and a sprinkle of almonds.</li>
<li>Scrambled eggs with spinach and tomatoes, served with a slice of whole-grain toast.</li>
<li>Protein smoothie made with whey protein powder, almond milk, banana, and peanut butter.</li>
</ol>
<b>Mid-Morning Snack:</b>
<ol>
<li>Cottage cheese with pineapple chunks.</li>
<li>Handful of mixed nuts (almonds, walnuts, cashews).</li>
</ol>
<b>Lunch:</b>
<ol>
<li>Grilled chicken salad with mixed greens, cherry tomatoes, cucumber, avocado, and balsamic vinaigrette dressing.</li>
<li>Quinoa bowl with black beans, roasted vegetables, and a dollop of Greek yogurt.</li>
<li>Tuna salad sandwich on whole-grain bread with lettuce and tomato.</li>
</ol>
<b>Afternoon Snack:</b>
<ol>
<li>Hard-boiled eggs.</li>
<li>Hummus with carrot and cucumber sticks.</li>
</ol>
<b>Dinner:</b>
<ol>
<li>Baked salmon with roasted sweet potatoes .</li>
<li>Stir-fried tofu with mixed vegetables and brown rice.</li>
</ol></div>
)}

{bmiResult  < 18 && (
  <div>
   
<h2 className='A'>Diet for Weight gaining Person</h2>
<b>Breakfast:</b>
<ol>
<li> Oatmeal cooked with whole milk, topped with sliced bananas, nuts, and a drizzle of honey.</li>
<li> Whole-grain toast with avocado spread, scrambled eggs, and a side of Greek yogurt.</li>
<li> Protein smoothie made with whey protein powder, whole milk, frozen berries, spinach, and almond butter.</li>
</ol>
<b>Mid-Morning Snack:</b>
<ol>
<li> Greek yogurt with granola and mixed berries.</li>
<li> Peanut butter sandwich on whole-grain bread.</li>
</ol>
<b>Lunch:</b>
<ol>
<li> Grilled chicken breast with quinoa, roasted vegetables, and avocado.</li>
<li> Lentil soup with whole-grain bread and a side salad with olive oil dressing.</li>
<li> Brown rice bowl with black beans, grilled tofu, sautéed spinach, and salsa.</li>
</ol>
<b>Afternoon Snack:</b>
<ol>
<li> Cottage cheese with pineapple chunks.</li>
<li> Hummus with carrot and cucumber sticks.</li>
<li> Whole-grain crackers with cheese slices.</li>
</ol>
<b>Dinner:</b>
<ol>
<li> Baked salmon with sweet potato mash, steamed broccoli, and a side of quinoa.</li>
<li> Beef stir-fry with mixed vegetables and brown rice.</li>
<li> Chickpea curry with coconut milk, served with brown rice and roasted cauliflower.</li>
</ol>
<b>Evening Snack (if needed):</b>
<ol>
<li> Smoothie made with whole milk, banana, oats, and protein powder.</li>
<li> Avocado toast with tomato slices and a sprinkle of hemp seeds.</li>
<li> Greek yogurt with honey and a handful of walnuts.</li>
</ol>
  </div>
)}
    </div>
   

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}