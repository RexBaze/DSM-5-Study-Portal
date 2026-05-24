// ============================================================
// DSM-5 DATA
// ============================================================
const DSM5_DATA = {
  chapters: [
    {
      id: 'depressive',
      name: 'Depressive Disorders',
      color: '#4d9cf6',
      disorders: [
        {
          id: 'mdd',
          name: 'Major Depressive Disorder',
          code: 'F32.x / F33.x',
          criteria: [
            {
              label: 'A',
              title: 'Five or more symptoms in a 2-week period',
              text: 'Five (or more) of the following symptoms have been present during the same 2-week period and represent a change from previous functioning; at least one symptom is either (1) depressed mood or (2) loss of interest or pleasure.',
              subcriteria: [
                { label: '1', text: 'Depressed mood most of the day, nearly every day, as indicated by either subjective report (e.g., feels sad, empty, hopeless) or observation made by others.' },
                { label: '2', text: 'Markedly diminished interest or pleasure in all, or almost all, activities most of the day, nearly every day (anhedonia).' },
                { label: '3', text: 'Significant weight loss when not dieting or weight gain (e.g., a change of more than 5% of body weight in a month), or decrease or increase in appetite nearly every day.' },
                { label: '4', text: 'Insomnia or hypersomnia nearly every day.' },
                { label: '5', text: 'Psychomotor agitation or retardation nearly every day (observable by others, not merely subjective feelings of restlessness or being slowed down).' },
                { label: '6', text: 'Fatigue or loss of energy nearly every day.' },
                { label: '7', text: 'Feelings of worthlessness or excessive or inappropriate guilt (which may be delusional) nearly every day (not merely self-reproach or guilt about being sick).' },
                { label: '8', text: 'Diminished ability to think or concentrate, or indecisiveness, nearly every day.' },
                { label: '9', text: 'Recurrent thoughts of death (not just fear of dying), recurrent suicidal ideation without a specific plan, or a suicide attempt, or a specific plan for committing suicide.' }
              ]
            },
            { label: 'B', title: 'Clinically significant distress or impairment', text: 'The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'C', title: 'Not attributable to substance or medical condition', text: 'The episode is not attributable to the physiological effects of a substance or another medical condition.' },
            { label: 'D', title: 'Not better explained by psychotic disorder', text: 'The occurrence of the major depressive episode is not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified and unspecified schizophrenia spectrum and other psychotic disorders.' },
            { label: 'E', title: 'Never had a manic or hypomanic episode', text: 'There has never been a manic episode or a hypomanic episode. Note: This exclusion does not apply if all of the manic-like or hypomanic-like episodes are substance-induced or are attributable to physiological effects of another medical condition.' }
          ],
          specifiers: ['Single episode vs. recurrent', 'Mild / Moderate / Severe', 'With anxious distress', 'With mixed features', 'With melancholic features', 'With atypical features', 'With psychotic features (mood-congruent or incongruent)', 'With catatonia', 'With peripartum onset', 'With seasonal pattern'],
          duration: 'Symptoms present during the same 2-week period.',
          exclusions: 'Manic/hypomanic episodes (unless substance-induced). Must rule out schizoaffective disorder, schizophrenia spectrum disorders, and medical causes.'
        },
        {
          id: 'pdd',
          name: 'Persistent Depressive Disorder (Dysthymia)',
          code: 'F34.1',
          criteria: [
            { label: 'A', title: 'Depressed mood most of the day, more days than not', text: 'Depressed mood for most of the day, for more days than not, as indicated by either subjective account or observation by others, for at least 2 years. Note: In children and adolescents, mood can be irritable and duration must be at least 1 year.' },
            {
              label: 'B',
              title: 'Two or more of the following symptoms',
              text: 'Presence, while depressed, of two (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Poor appetite or overeating.' },
                { label: '2', text: 'Insomnia or hypersomnia.' },
                { label: '3', text: 'Low energy or fatigue.' },
                { label: '4', text: 'Low self-esteem.' },
                { label: '5', text: 'Poor concentration or difficulty making decisions.' },
                { label: '6', text: 'Feelings of hopelessness.' }
              ]
            },
            { label: 'C', title: 'Never without symptoms for more than 2 months', text: 'During the 2-year period (1 year for children or adolescents) of the disturbance, the individual has never been without the symptoms in Criteria A and B for more than 2 months at a time.' },
            { label: 'D', title: 'MDD criteria may be continuously present for 2 years', text: 'Criteria for a major depressive disorder may be continuously present for 2 years.' },
            { label: 'E', title: 'No manic or hypomanic episode; no cyclothymic disorder', text: 'There has never been a manic episode or a hypomanic episode, and criteria have never been met for cyclothymic disorder.' },
            { label: 'F', title: 'Not better explained by psychotic disorder', text: 'The disturbance does not occur exclusively during the course of a chronic psychotic disorder such as schizophrenia or delusional disorder.' },
            { label: 'G', title: 'Not attributable to substance or medical condition', text: 'The symptoms are not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hypothyroidism).' },
            { label: 'H', title: 'Clinically significant distress or impairment', text: 'The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.' }
          ],
          specifiers: ['With anxious distress', 'With mixed features', 'With melancholic features', 'With atypical features', 'With mood-congruent/incongruent psychotic features', 'With peripartum onset', 'Early onset (before age 21)', 'Late onset (age 21 or older)', 'With pure dysthymic syndrome', 'With persistent MDE', 'With intermittent MDE'],
          duration: 'Depressed mood most of the day, more days than not, for at least 2 years (1 year in children/adolescents). Never symptom-free for more than 2 consecutive months.',
          exclusions: 'Manic/hypomanic episodes, cyclothymia, psychotic disorder, substance/medical etiology.'
        },
        {
          id: 'dmdd',
          name: 'Disruptive Mood Dysregulation Disorder',
          code: 'F34.81',
          criteria: [
            { label: 'A', title: 'Severe recurrent temper outbursts', text: 'Severe recurrent temper outbursts manifested verbally (e.g., verbal rages) and/or behaviorally (e.g., physical aggression toward people or property) that are grossly out of proportion in intensity or duration to the situation or provocation.' },
            { label: 'B', title: 'Inconsistent with developmental level', text: 'The temper outbursts are inconsistent with developmental level.' },
            { label: 'C', title: 'Average 3 or more times per week', text: 'The temper outbursts occur, on average, three or more times per week.' },
            { label: 'D', title: 'Persistently irritable or angry mood between outbursts', text: 'The mood between temper outbursts is persistently irritable or angry most of the day, nearly every day, and is observable by others (e.g., parents, teachers, peers).' },
            { label: 'E', title: 'Duration at least 12 months', text: 'Criteria A-D have been present for 12 or more months. Throughout that time, the individual has not had a period lasting 3 or more consecutive months without all of the symptoms in Criteria A-D.' },
            { label: 'F', title: 'Present in at least two settings', text: 'Criteria A and D are present in at least two of three settings (i.e., at home, at school, with peers) and are severe in at least one of these.' },
            { label: 'G', title: 'Age 6-18 at first diagnosis', text: 'The diagnosis should not be made for the first time before age 6 years or after age 18 years.' },
            { label: 'H', title: 'Onset before age 10', text: 'By history or observation, the age at onset of Criteria A-E is before 10 years.' },
            { label: 'I', title: 'No distinct manic/hypomanic episode lasting more than 1 day', text: 'There has never been a distinct period lasting more than 1 day during which the full symptom criteria, except duration, for a manic or hypomanic episode have been met.' },
            { label: 'J', title: 'Not better explained by another disorder', text: 'The behaviors do not occur exclusively during an episode of MDD and are not better explained by another mental disorder (e.g., ASD, PTSD, separation anxiety disorder, persistent depressive disorder).' },
            { label: 'K', title: 'Not attributable to substance or medical condition', text: 'The symptoms are not attributable to the physiological effects of a substance or another medical or neurological condition.' }
          ],
          specifiers: [],
          duration: 'Criteria met for at least 12 months; no symptom-free period > 3 consecutive months. Age of onset before 10; diagnosis not made before age 6 or after 18.',
          exclusions: 'Must rule out manic/hypomanic episodes, MDD, ASD, PTSD, psychotic disorders, ODD (DMDD and ODD cannot be comorbid). Cannot be diagnosed with both DMDD and bipolar disorder.'
        }
      ]
    },
    {
      id: 'bipolar',
      name: 'Bipolar and Related Disorders',
      color: '#b07df0',
      disorders: [
        {
          id: 'bipolar1',
          name: 'Bipolar I Disorder',
          code: 'F31.x',
          criteria: [
            {
              label: 'Manic Episode - A',
              title: 'Elevated/expansive/irritable mood and increased energy',
              text: 'A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased goal-directed activity or energy, lasting at least 1 week and present most of the day, nearly every day (or any duration if hospitalization is necessary).'
            },
            {
              label: 'Manic Episode - B',
              title: 'Three or more of the following (four if mood is only irritable)',
              text: 'During the period of mood disturbance and increased energy or activity, three (or more) of the following symptoms (four if the mood is only irritable) are present to a significant degree and represent a noticeable change from usual behavior:',
              subcriteria: [
                { label: '1', text: 'Inflated self-esteem or grandiosity.' },
                { label: '2', text: 'Decreased need for sleep (e.g., feels rested after only 3 hours of sleep).' },
                { label: '3', text: 'More talkative than usual or pressure to keep talking.' },
                { label: '4', text: 'Flight of ideas or subjective experience that thoughts are racing.' },
                { label: '5', text: 'Distractibility (i.e., attention too easily drawn to unimportant or irrelevant external stimuli), as reported or observed.' },
                { label: '6', text: 'Increase in goal-directed activity (either socially, at work or school, or sexually) or psychomotor agitation (i.e., purposeless non-goal-directed activity).' },
                { label: '7', text: 'Excessive involvement in activities that have a high potential for painful consequences (e.g., engaging in unrestrained buying sprees, sexual indiscretions, or foolish business investments).' }
              ]
            },
            { label: 'Manic Episode - C', title: 'Marked impairment or psychotic features or hospitalization', text: 'The mood disturbance is sufficiently severe to cause marked impairment in social or occupational functioning or to necessitate hospitalization to prevent harm to self or others, or there are psychotic features.' },
            { label: 'Manic Episode - D', title: 'Not attributable to substance or medical condition', text: 'The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication, or other treatment) or another medical condition. Note: A full manic episode that emerges during antidepressant treatment (medication, ECT) and persists beyond the physiological effect of that treatment is sufficient evidence for a manic episode and, therefore, a Bipolar I diagnosis.' }
          ],
          specifiers: ['Current or most recent episode: manic / hypomanic / depressed / unspecified', 'With anxious distress', 'With mixed features', 'With rapid cycling', 'With melancholic features', 'With atypical features', 'With psychotic features', 'With catatonia', 'With peripartum onset', 'With seasonal pattern'],
          duration: 'Manic episode: at least 1 week (most of the day, nearly every day), or any duration if hospitalized.',
          exclusions: 'Manic episode not caused by substance or medical condition. Bipolar I requires at least one lifetime manic episode; depressive episodes are common but not required for diagnosis.'
        },
        {
          id: 'bipolar2',
          name: 'Bipolar II Disorder',
          code: 'F31.81',
          criteria: [
            { label: 'A', title: 'At least one hypomanic episode and at least one MDE', text: 'Criteria have been met for at least one hypomanic episode (criteria below) and at least one major depressive episode.' },
            { label: 'B', title: 'No manic episode ever', text: 'There has never been a manic episode.' },
            { label: 'C', title: 'Not better explained by schizoaffective or psychotic disorder', text: 'The occurrence of the hypomanic episode(s) and major depressive episode(s) is not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorders.' },
            { label: 'D', title: 'Clinically significant distress or impairment', text: 'The symptoms of depression or the unpredictability caused by frequent alternation between periods of depression and hypomania causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            {
              label: 'Hypomanic Episode - A',
              title: 'Elevated/expansive/irritable mood and increased energy for at least 4 consecutive days',
              text: 'A distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased activity or energy, lasting at least 4 consecutive days and present most of the day, nearly every day.'
            },
            {
              label: 'Hypomanic Episode - B',
              title: 'Three or more of the following (four if mood is only irritable)',
              text: 'During the period of mood disturbance and increased energy or activity, three (or more) of the following symptoms (four if mood is only irritable) are present to a significant degree and represent a noticeable change from usual behavior:',
              subcriteria: [
                { label: '1', text: 'Inflated self-esteem or grandiosity.' },
                { label: '2', text: 'Decreased need for sleep.' },
                { label: '3', text: 'More talkative than usual or pressure to keep talking.' },
                { label: '4', text: 'Flight of ideas or racing thoughts.' },
                { label: '5', text: 'Distractibility.' },
                { label: '6', text: 'Increased goal-directed activity or psychomotor agitation.' },
                { label: '7', text: 'Excessive involvement in risky activities.' }
              ]
            },
            { label: 'Hypomanic Episode - C', title: 'Change in functioning observable by others; no marked impairment', text: 'The episode is associated with an unequivocal change in functioning that is uncharacteristic of the individual when not symptomatic. The change in mood and functioning is observable by others. The episode is not severe enough to cause marked impairment in social or occupational functioning or to necessitate hospitalization. If psychotic features are present, the episode is, by definition, manic.' },
            { label: 'Hypomanic Episode - D', title: 'Not attributable to substance or medical condition', text: 'The episode is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication or other treatment) or another medical condition.' }
          ],
          specifiers: ['Current or most recent episode: hypomanic / depressed', 'With anxious distress', 'With mixed features', 'With rapid cycling', 'With melancholic features (current MDE)', 'With atypical features (current MDE)', 'With psychotic features (current MDE)', 'With catatonia', 'With peripartum onset', 'With seasonal pattern'],
          duration: 'Hypomanic episode: at least 4 consecutive days. Manic episode: NEVER (key distinction from Bipolar I).',
          exclusions: 'Must have had at least one MDE. No manic episodes ever. Distinguishes from Bipolar I by absence of full manic episode and lack of marked impairment during hypomanic episodes.'
        },
        {
          id: 'cyclothymia',
          name: 'Cyclothymic Disorder',
          code: 'F34.0',
          criteria: [
            { label: 'A', title: 'Numerous periods with hypomanic and depressive symptoms for at least 2 years', text: 'For at least 2 years (at least 1 year in children and adolescents) there have been numerous periods with hypomanic symptoms that do not meet criteria for a hypomanic episode and numerous periods with depressive symptoms that do not meet criteria for a major depressive episode.' },
            { label: 'B', title: 'Symptoms present for at least half the time; no symptom-free period > 2 months', text: 'During the above 2-year period (1 year in children and adolescents), the hypomanic and depressive periods have been present for at least half the time and the individual has not been without the symptoms for more than 2 months at a time.' },
            { label: 'C', title: 'Never met criteria for MDE, manic, or hypomanic episode', text: 'Criteria for a major depressive, manic, or hypomanic episode have never been met.' },
            { label: 'D', title: 'Not better explained by another mental disorder', text: 'The symptoms in Criterion A are not better explained by schizoaffective disorder, schizophrenia, schizophreniform disorder, delusional disorder, or other specified or unspecified schizophrenia spectrum and other psychotic disorders.' },
            { label: 'E', title: 'Not attributable to substance or medical condition', text: 'The symptoms are not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hyperthyroidism).' },
            { label: 'F', title: 'Clinically significant distress or impairment', text: 'The symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.' }
          ],
          specifiers: ['With anxious distress'],
          duration: 'At least 2 years (1 year in children/adolescents); symptoms present at least half the time; never symptom-free for more than 2 consecutive months.',
          exclusions: 'Full episodes of mania, hypomania, or major depression have NEVER been met. If criteria are eventually met for a full episode, the diagnosis changes to Bipolar I or II.'
        }
      ]
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      color: '#e8893a',
      disorders: [
        {
          id: 'gad',
          name: 'Generalized Anxiety Disorder',
          code: 'F41.1',
          criteria: [
            { label: 'A', title: 'Excessive anxiety and worry about multiple domains for at least 6 months', text: 'Excessive anxiety and worry (apprehensive expectation), occurring more days than not for at least 6 months, about a number of events or activities (such as work or school performance).' },
            { label: 'B', title: 'Difficult to control the worry', text: 'The individual finds it difficult to control the worry.' },
            {
              label: 'C',
              title: 'Three or more associated symptoms (one in children)',
              text: 'The anxiety and worry are associated with three (or more) of the following six symptoms (with at least some symptoms having been present for more days than not for the past 6 months; note: only one item is required in children):',
              subcriteria: [
                { label: '1', text: 'Restlessness or feeling keyed up or on edge.' },
                { label: '2', text: 'Being easily fatigued.' },
                { label: '3', text: 'Difficulty concentrating or mind going blank.' },
                { label: '4', text: 'Irritability.' },
                { label: '5', text: 'Muscle tension.' },
                { label: '6', text: 'Sleep disturbance (difficulty falling or staying asleep, or restless, unsatisfying sleep).' }
              ]
            },
            { label: 'D', title: 'Clinically significant distress or impairment', text: 'The anxiety, worry, or physical symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'E', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hyperthyroidism).' },
            { label: 'F', title: 'Not better explained by another mental disorder', text: 'The disturbance is not better explained by another mental disorder (e.g., anxiety or worry about having panic attacks in panic disorder, negative evaluation in social anxiety disorder, contamination in OCD, traumatic events in PTSD, separation from attachment figures in separation anxiety disorder, gaining weight in anorexia nervosa, multiple physical complaints in somatic symptom disorder, perceived appearance flaws in BDD, having a serious illness in illness anxiety disorder, or content of delusional beliefs in schizophrenia or delusional disorder).' }
          ],
          specifiers: [],
          duration: 'More days than not for at least 6 months.',
          exclusions: 'Must not be better explained by another anxiety disorder. Rule out medical causes (hyperthyroidism, cardiac conditions) and substance effects. Distinguish from normal worry by excessiveness and uncontrollability.'
        },
        {
          id: 'panic',
          name: 'Panic Disorder',
          code: 'F41.0',
          criteria: [
            {
              label: 'A',
              title: 'Recurrent unexpected panic attacks',
              text: 'Recurrent unexpected panic attacks. A panic attack is an abrupt surge of intense fear or intense discomfort that reaches a peak within minutes, and during which time four (or more) of the following symptoms occur:',
              subcriteria: [
                { label: '1', text: 'Palpitations, pounding heart, or accelerated heart rate.' },
                { label: '2', text: 'Sweating.' },
                { label: '3', text: 'Trembling or shaking.' },
                { label: '4', text: 'Sensations of shortness of breath or smothering.' },
                { label: '5', text: 'Feelings of choking.' },
                { label: '6', text: 'Chest pain or discomfort.' },
                { label: '7', text: 'Nausea or abdominal distress.' },
                { label: '8', text: 'Feeling dizzy, unsteady, light-headed, or faint.' },
                { label: '9', text: 'Chills or heat sensations.' },
                { label: '10', text: 'Paresthesias (numbness or tingling sensations).' },
                { label: '11', text: 'Derealization (feelings of unreality) or depersonalization (being detached from oneself).' },
                { label: '12', text: 'Fear of losing control or "going crazy."' },
                { label: '13', text: 'Fear of dying.' }
              ]
            },
            {
              label: 'B',
              title: 'At least one attack followed by 1 month or more of either:',
              text: 'At least one of the attacks has been followed by 1 month (or more) of one or both of the following:',
              subcriteria: [
                { label: '1', text: 'Persistent concern or worry about additional panic attacks or their consequences (e.g., losing control, having a heart attack, "going crazy").' },
                { label: '2', text: 'A significant maladaptive change in behavior related to the attacks (e.g., behaviors designed to avoid having panic attacks, such as avoidance of exercise or unfamiliar situations).' }
              ]
            },
            { label: 'C', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition (e.g., hyperthyroidism, cardiopulmonary disorders).' },
            { label: 'D', title: 'Not better explained by another mental disorder', text: 'The disturbance is not better explained by another mental disorder (e.g., the panic attacks do not occur only in response to feared social situations, in response to circumscribed phobic objects or situations, in response to obsessions, in response to reminders of traumatic events, or in response to separation from attachment figures).' }
          ],
          specifiers: [],
          duration: 'At least 1 month of persistent concern or behavioral change following an attack.',
          exclusions: 'Attacks must be "unexpected" (not situationally bound) for at least some episodes. Rule out social anxiety, specific phobia, PTSD, OCD. Must rule out medical causes (cardiac arrhythmia, hyperthyroidism, pheochromocytoma).'
        },
        {
          id: 'sad',
          name: 'Social Anxiety Disorder',
          code: 'F40.10',
          criteria: [
            { label: 'A', title: 'Marked fear or anxiety about social situations', text: 'Marked fear or anxiety about one or more social situations in which the individual is exposed to possible scrutiny by others. Examples include social interactions (e.g., having a conversation, meeting unfamiliar people), being observed (e.g., eating or drinking), and performing in front of others (e.g., giving a speech).' },
            { label: 'B', title: 'Fear of acting in a way that will be negatively evaluated', text: 'The individual fears that he or she will act in a way or show anxiety symptoms that will be negatively evaluated (i.e., will be humiliating or embarrassing; will lead to rejection or offend others).' },
            { label: 'C', title: 'Social situations almost always provoke fear or anxiety', text: 'The social situations almost always provoke fear or anxiety. Note: In children, the fear or anxiety may be expressed by crying, tantrums, freezing, clinging, shrinking, or failing to speak in social situations.' },
            { label: 'D', title: 'Social situations are avoided or endured with intense fear', text: 'The social situations are avoided or endured with intense fear or anxiety.' },
            { label: 'E', title: 'Fear is out of proportion to actual threat', text: 'The fear or anxiety is out of proportion to the actual threat posed by the social situation and to the sociocultural context.' },
            { label: 'F', title: 'Duration at least 6 months', text: 'The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.' },
            { label: 'G', title: 'Clinically significant distress or impairment', text: 'The fear, anxiety, or avoidance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'H', title: 'Not attributable to substance or medical condition', text: 'The fear, anxiety, or avoidance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.' },
            { label: 'I', title: 'Not better explained by another mental disorder', text: 'The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder, such as panic disorder, body dysmorphic disorder, or autism spectrum disorder.' },
            { label: 'J', title: 'Not related to medical condition', text: 'If another medical condition (e.g., Parkinson\'s disease, obesity, disfigurement from burns or injury) is present, the fear, anxiety, or avoidance is clearly unrelated or is excessive.' }
          ],
          specifiers: ['Performance only (fear restricted to speaking or performing in public)'],
          duration: 'Typically 6 months or more.',
          exclusions: 'Distinguished from panic disorder (social vs. unexpected), agoraphobia, specific phobia, separation anxiety, and normal shyness. "Performance only" specifier when limited to public performance/speaking.'
        },
        {
          id: 'specific_phobia',
          name: 'Specific Phobia',
          code: 'F40.2xx',
          criteria: [
            { label: 'A', title: 'Marked fear or anxiety about a specific object or situation', text: 'Marked fear or anxiety about a specific object or situation (e.g., flying, heights, animals, receiving an injection, seeing blood). Note: In children, the fear or anxiety may be expressed by crying, tantrums, freezing, or clinging.' },
            { label: 'B', title: 'Phobic object or situation almost always provokes immediate fear', text: 'The phobic object or situation almost always provokes immediate fear or anxiety.' },
            { label: 'C', title: 'Phobic object is avoided or endured with intense distress', text: 'The phobic object or situation is actively avoided or endured with intense fear or anxiety.' },
            { label: 'D', title: 'Fear is out of proportion', text: 'The fear or anxiety is out of proportion to the actual danger posed by the specific object or situation and to the sociocultural context.' },
            { label: 'E', title: 'Duration at least 6 months', text: 'The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.' },
            { label: 'F', title: 'Clinically significant distress or impairment', text: 'The fear, anxiety, or avoidance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'G', title: 'Not better explained by another mental disorder', text: 'The disturbance is not better explained by the symptoms of another mental disorder, including fear, anxiety, and avoidance of situations associated with panic-like symptoms or other incapacitating symptoms (as in agoraphobia); objects or situations related to obsessions (as in OCD); reminders of traumatic events (as in PTSD); separation from home or attachment figures (as in separation anxiety disorder); or social situations (as in social anxiety disorder).' }
          ],
          specifiers: ['Animal', 'Natural environment (e.g., heights, storms, water)', 'Blood-injection-injury', 'Situational (e.g., airplanes, elevators, enclosed places)', 'Other (e.g., situations that may lead to choking or vomiting; in children, loud sounds or costumed characters)'],
          duration: 'Typically 6 months or more.',
          exclusions: 'Must be distinguished from agoraphobia, social anxiety disorder, OCD, PTSD, and separation anxiety. Blood-injection-injury type often involves a vasovagal response (fainting).'
        },
        {
          id: 'agoraphobia',
          name: 'Agoraphobia',
          code: 'F40.00',
          criteria: [
            {
              label: 'A',
              title: 'Marked fear or anxiety about two or more agoraphobic situations',
              text: 'Marked fear or anxiety about two (or more) of the following five situations:',
              subcriteria: [
                { label: '1', text: 'Using public transportation (e.g., automobiles, buses, trains, ships, planes).' },
                { label: '2', text: 'Being in open spaces (e.g., parking lots, marketplaces, bridges).' },
                { label: '3', text: 'Being in enclosed places (e.g., shops, theaters, cinemas).' },
                { label: '4', text: 'Standing in line or being in a crowd.' },
                { label: '5', text: 'Being outside of the home alone.' }
              ]
            },
            { label: 'B', title: 'Fears situations because escape might be difficult', text: 'The individual fears or avoids these situations because of thoughts that escape might be difficult or help might not be available in the event of developing panic-like symptoms or other incapacitating or embarrassing symptoms (e.g., fear of falling in the elderly; fear of incontinence).' },
            { label: 'C', title: 'Agoraphobic situations almost always provoke fear', text: 'The agoraphobic situations almost always provoke fear or anxiety.' },
            { label: 'D', title: 'Situations are avoided or endured with intense distress', text: 'The agoraphobic situations are actively avoided, require the presence of a companion, or are endured with intense fear or anxiety.' },
            { label: 'E', title: 'Fear is out of proportion', text: 'The fear or anxiety is out of proportion to the actual danger posed by the agoraphobic situations and to the sociocultural context.' },
            { label: 'F', title: 'Duration at least 6 months', text: 'The fear, anxiety, or avoidance is persistent, typically lasting for 6 months or more.' },
            { label: 'G', title: 'Clinically significant distress or impairment', text: 'The fear, anxiety, or avoidance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'H', title: 'Not attributable to another condition', text: 'If another medical condition (e.g., inflammatory bowel disease, Parkinson\'s disease) is present, the fear, anxiety, or avoidance is clearly excessive.' },
            { label: 'I', title: 'Not better explained by another mental disorder', text: 'The fear, anxiety, or avoidance is not better explained by the symptoms of another mental disorder - for example, the symptoms are not confined to specific phobia, situational type; do not involve only social situations (as in social anxiety disorder); and are not related exclusively to obsessions (OCD), perceived defects or flaws in physical appearance (BDD), reminders of traumatic events (PTSD), or fear of separation (separation anxiety disorder).' }
          ],
          specifiers: [],
          duration: 'Typically 6 months or more. NOTE: Agoraphobia is diagnosed irrespective of the presence of panic disorder.',
          exclusions: 'Must involve 2+ of the 5 specified situation types. Distinguished from specific phobia (situational), social anxiety, and separation anxiety. Agoraphobia can be diagnosed with or without panic disorder.'
        }
      ]
    },
    {
      id: 'ocd',
      name: 'OCD and Related Disorders',
      color: '#e05252',
      disorders: [
        {
          id: 'ocd_dx',
          name: 'Obsessive-Compulsive Disorder',
          code: 'F42',
          criteria: [
            {
              label: 'A',
              title: 'Presence of obsessions, compulsions, or both',
              text: 'Presence of obsessions, compulsions, or both. Obsessions are defined by (1) and (2). Compulsions are defined by (1) and (2).',
              subcriteria: [
                { label: 'Obsession 1', text: 'Recurrent and persistent thoughts, urges, or images that are experienced, at some time during the disturbance, as intrusive and unwanted, and that in most individuals cause marked anxiety or distress.' },
                { label: 'Obsession 2', text: 'The individual attempts to ignore or suppress such thoughts, urges, or images, or to neutralize them with some other thought or action (i.e., by performing a compulsion).' },
                { label: 'Compulsion 1', text: 'Repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the individual feels driven to perform in response to an obsession or according to rules that must be applied rigidly.' },
                { label: 'Compulsion 2', text: 'The behaviors or mental acts are aimed at preventing or reducing anxiety or distress, or preventing some dreaded event or situation; however, these behaviors or mental acts are not connected in a realistic way with what they are designed to neutralize or prevent, or are clearly excessive.' }
              ]
            },
            { label: 'B', title: 'Time-consuming or causes distress/impairment', text: 'The obsessions or compulsions are time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'C', title: 'Not attributable to substance or medical condition', text: 'The obsessive-compulsive symptoms are not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.' },
            { label: 'D', title: 'Not better explained by another mental disorder', text: 'The disturbance is not better explained by the symptoms of another mental disorder (e.g., excessive worries, as in GAD; preoccupation with appearance, as in BDD; difficulty discarding, as in hoarding disorder; hair pulling, as in trichotillomania; skin picking, as in excoriation disorder; stereotypies, as in ASD; ritualized eating behavior, as in eating disorders; preoccupation with substances or gambling; preoccupation with having an illness, as in illness anxiety disorder; sexual urges, as in paraphilic disorders; impulses, as in disruptive, impulse-control, and conduct disorders; guilty ruminations, as in MDD; thought insertion or delusional preoccupations, as in schizophrenia spectrum and other psychotic disorders; repetitive patterns of behavior, as in ASD).' }
          ],
          specifiers: ['With good or fair insight', 'With poor insight', 'With absent insight / delusional beliefs', 'Tic-related'],
          duration: 'No minimum duration specified, but symptoms must be time-consuming (>1 hr/day) or cause significant impairment.',
          exclusions: 'Must distinguish ego-dystonic obsessions from ego-syntonic beliefs (psychosis). Rule out GAD (excessive worry), BDD, hoarding, tic disorders, and other OCD-spectrum disorders.'
        },
        {
          id: 'bdd',
          name: 'Body Dysmorphic Disorder',
          code: 'F45.22',
          criteria: [
            { label: 'A', title: 'Preoccupation with perceived defects in physical appearance', text: 'Preoccupation with one or more perceived defects or flaws in physical appearance that are not observable or appear slight to others.' },
            { label: 'B', title: 'Repetitive behaviors or mental acts in response to appearance concerns', text: 'At some point during the course of the disorder, the individual has performed repetitive behaviors (e.g., mirror checking, excessive grooming, skin picking, reassurance seeking) or mental acts (e.g., comparing his or her appearance with that of others) in response to the appearance concerns.' },
            { label: 'C', title: 'Clinically significant distress or impairment', text: 'The preoccupation causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'D', title: 'Not better explained by an eating disorder', text: 'The appearance preoccupation is not better explained by concerns with body fat or weight in an individual whose symptoms meet diagnostic criteria for an eating disorder.' }
          ],
          specifiers: ['With muscle dysmorphia', 'With good or fair insight', 'With poor insight', 'With absent insight / delusional beliefs'],
          duration: 'No specific minimum duration.',
          exclusions: 'The perceived flaws are NOT observable or appear only slight to others (key distinction from actual disfigurement). Rule out eating disorders for weight/shape concerns, OCD, illness anxiety disorder, and major depression with somatic features.'
        },
        {
          id: 'hoarding',
          name: 'Hoarding Disorder',
          code: 'F42.3',
          criteria: [
            { label: 'A', title: 'Persistent difficulty discarding possessions', text: 'Persistent difficulty discarding or parting with possessions, regardless of their actual value.' },
            { label: 'B', title: 'Difficulty due to perceived need to save and distress at discarding', text: 'This difficulty is due to a perceived need to save the items and to distress associated with discarding them.' },
            { label: 'C', title: 'Accumulation clogs active living areas', text: 'The difficulty discarding possessions results in the accumulation of possessions that congest and clutter active living areas and substantially compromises their intended use. If living areas are uncluttered, it is only because of the interventions of third parties (e.g., family members, cleaners, authorities).' },
            { label: 'D', title: 'Clinically significant distress or impairment', text: 'The hoarding causes clinically significant distress or impairment in social, occupational, or other important areas of functioning (including maintaining a safe environment for self and others).' },
            { label: 'E', title: 'Not attributable to another medical condition', text: 'The hoarding is not attributable to another medical condition (e.g., brain injury, cerebrovascular disease, Prader-Willi syndrome).' },
            { label: 'F', title: 'Not better explained by another mental disorder', text: 'The hoarding is not better explained by the symptoms of another mental disorder (e.g., obsessions in OCD, decreased energy in MDD, delusions in schizophrenia or another psychotic disorder, cognitive deficits in NCD, restricted interests in ASD).' }
          ],
          specifiers: ['With excessive acquisition', 'With good or fair insight', 'With poor insight', 'With absent insight / delusional beliefs'],
          duration: 'No minimum duration specified.',
          exclusions: 'Distinguished from OCD hoarding by the absence of intrusive thoughts driving the behavior and by the fact that items feel personally meaningful. Rule out medical conditions (Prader-Willi), dementia, and MDD-related accumulation from loss of energy.'
        }
      ]
    },
    {
      id: 'trauma',
      name: 'Trauma and Stressor-Related Disorders',
      color: '#c8901e',
      disorders: [
        {
          id: 'ptsd',
          name: 'Posttraumatic Stress Disorder',
          code: 'F43.10',
          criteria: [
            {
              label: 'A',
              title: 'Exposure to actual or threatened death, serious injury, or sexual violence',
              text: 'Exposure to actual or threatened death, serious injury, or sexual violence in one (or more) of the following ways:',
              subcriteria: [
                { label: '1', text: 'Directly experiencing the traumatic event(s).' },
                { label: '2', text: 'Witnessing, in person, the event(s) as it occurred to others.' },
                { label: '3', text: 'Learning that the traumatic event(s) occurred to a close family member or close friend. In cases of actual or threatened death of a family member or friend, the event(s) must have been violent or accidental.' },
                { label: '4', text: 'Experiencing repeated or extreme exposure to aversive details of the traumatic event(s) (e.g., first responders collecting human remains; police officers repeatedly exposed to details of child abuse). Note: Criterion A4 does not apply to exposure through electronic media, television, movies, or pictures, unless this exposure is work related.' }
              ]
            },
            {
              label: 'B',
              title: 'One or more intrusion symptoms',
              text: 'Presence of one (or more) of the following intrusion symptoms associated with the traumatic event(s), beginning after the traumatic event(s) occurred:',
              subcriteria: [
                { label: '1', text: 'Recurrent, involuntary, and intrusive distressing memories of the traumatic event(s). Note: In children older than 6 years, repetitive play may occur in which themes or aspects of the traumatic event(s) are expressed.' },
                { label: '2', text: 'Recurrent distressing dreams in which the content and/or affect of the dream are related to the traumatic event(s). Note: In children, there may be frightening dreams without recognizable content.' },
                { label: '3', text: 'Dissociative reactions (e.g., flashbacks) in which the individual feels or acts as if the traumatic event(s) were recurring. (Such reactions may occur on a continuum, with the most extreme expression being a complete loss of awareness of present surroundings.) Note: In children, trauma-specific reenactment may occur in play.' },
                { label: '4', text: 'Intense or prolonged psychological distress at exposure to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).' },
                { label: '5', text: 'Marked physiological reactions to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).' }
              ]
            },
            {
              label: 'C',
              title: 'One or more avoidance symptoms',
              text: 'Persistent avoidance of stimuli associated with the traumatic event(s), beginning after the traumatic event(s) occurred, as evidenced by one or both of the following:',
              subcriteria: [
                { label: '1', text: 'Avoidance of or efforts to avoid distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).' },
                { label: '2', text: 'Avoidance of or efforts to avoid external reminders (people, places, conversations, activities, objects, situations) that arouse distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).' }
              ]
            },
            {
              label: 'D',
              title: 'Two or more negative alterations in cognitions and mood',
              text: 'Negative alterations in cognitions and mood associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred, as evidenced by two (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Inability to remember an important aspect of the traumatic event(s) (typically due to dissociative amnesia and not to other factors such as head injury, alcohol, or drugs).' },
                { label: '2', text: 'Persistent and exaggerated negative beliefs or expectations about oneself, others, or the world (e.g., "I am bad," "No one can be trusted," "The world is completely dangerous," "My whole nervous system is permanently ruined").' },
                { label: '3', text: 'Persistent, distorted cognitions about the cause or consequences of the traumatic event(s) that lead the individual to blame himself/herself or others.' },
                { label: '4', text: 'Persistent negative emotional state (e.g., fear, horror, anger, guilt, or shame).' },
                { label: '5', text: 'Markedly diminished interest or participation in significant activities.' },
                { label: '6', text: 'Feelings of detachment or estrangement from others.' },
                { label: '7', text: 'Persistent inability to experience positive emotions (e.g., inability to experience happiness, satisfaction, or loving feelings).' }
              ]
            },
            {
              label: 'E',
              title: 'Two or more alterations in arousal and reactivity',
              text: 'Marked alterations in arousal and reactivity associated with the traumatic event(s), beginning or worsening after the traumatic event(s) occurred, as evidenced by two (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Irritable behavior and angry outbursts (with little or no provocation) typically expressed as verbal or physical aggression toward people or objects.' },
                { label: '2', text: 'Reckless or self-destructive behavior.' },
                { label: '3', text: 'Hypervigilance.' },
                { label: '4', text: 'Exaggerated startle response.' },
                { label: '5', text: 'Problems with concentration.' },
                { label: '6', text: 'Sleep disturbance (e.g., difficulty falling or staying asleep or restless sleep).' }
              ]
            },
            { label: 'F', title: 'Duration more than 1 month', text: 'Duration of the disturbance (Criteria B, C, D, and E) is more than 1 month.' },
            { label: 'G', title: 'Clinically significant distress or impairment', text: 'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'H', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the physiological effects of a substance (e.g., medication, alcohol) or another medical condition.' }
          ],
          specifiers: ['With dissociative symptoms: depersonalization / derealization', 'With delayed expression (full criteria not met until at least 6 months after event)'],
          duration: 'Symptoms persist for more than 1 month (distinguishes from Acute Stress Disorder which is 3 days to 1 month).',
          exclusions: 'For children 6 years and younger, modified criteria apply. Distinguished from Acute Stress Disorder by duration. Must rule out medical/substance causes. Adjustment disorder when criteria for full PTSD are not met.'
        },
        {
          id: 'acute_stress',
          name: 'Acute Stress Disorder',
          code: 'F43.0',
          criteria: [
            {
              label: 'A',
              title: 'Exposure to traumatic event (same as PTSD Criterion A)',
              text: 'Exposure to actual or threatened death, serious injury, or sexual violence in one (or more) of the following ways: directly experiencing; witnessing in person; learning of violent/accidental event to close family/friend; or repeated/extreme exposure to aversive details (work-related).'
            },
            {
              label: 'B',
              title: 'Nine or more symptoms from five categories',
              text: 'Presence of nine (or more) of the following symptoms from any of the five categories of intrusion, negative mood, dissociation, avoidance, and arousal, beginning or worsening after the traumatic event(s) occurred:',
              subcriteria: [
                { label: 'Intrusion 1', text: 'Recurrent, involuntary, and intrusive distressing memories of the traumatic event(s).' },
                { label: 'Intrusion 2', text: 'Recurrent distressing dreams in which the content or affect of the dream are related to the event(s).' },
                { label: 'Intrusion 3', text: 'Dissociative reactions (e.g., flashbacks) in which the individual feels or acts as if the traumatic event(s) were recurring.' },
                { label: 'Intrusion 4', text: 'Intense or prolonged psychological distress or marked physiological reactions in response to internal or external cues that symbolize or resemble an aspect of the traumatic event(s).' },
                { label: 'Neg Mood 5', text: 'Persistent inability to experience positive emotions (e.g., inability to experience happiness, satisfaction, or loving feelings).' },
                { label: 'Dissociation 6', text: 'An altered sense of the reality of one\'s surroundings or oneself (e.g., seeing oneself from another\'s perspective, being in a daze, time slowing).' },
                { label: 'Dissociation 7', text: 'Inability to remember an important aspect of the traumatic event(s) (typically due to dissociative amnesia, and not to other factors such as head injury, alcohol, or drugs).' },
                { label: 'Avoidance 8', text: 'Efforts to avoid distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).' },
                { label: 'Avoidance 9', text: 'Efforts to avoid external reminders (people, places, conversations, activities, objects, situations) that arouse distressing memories, thoughts, or feelings about or closely associated with the traumatic event(s).' },
                { label: 'Arousal 10', text: 'Sleep disturbance (e.g., difficulty falling or staying asleep, restless sleep).' },
                { label: 'Arousal 11', text: 'Irritable behavior and angry outbursts (with little or no provocation), typically expressed as verbal or physical aggression toward people or objects.' },
                { label: 'Arousal 12', text: 'Hypervigilance.' },
                { label: 'Arousal 13', text: 'Problems with concentration.' },
                { label: 'Arousal 14', text: 'Exaggerated startle response.' }
              ]
            },
            { label: 'C', title: 'Duration 3 days to 1 month after trauma exposure', text: 'Duration of the disturbance (symptoms in Criterion B) is 3 days to 1 month after trauma exposure. Note: Symptoms typically begin immediately after the trauma, but persistence for at least 3 days and up to a month is needed to meet disorder criteria.' },
            { label: 'D', title: 'Clinically significant distress or impairment', text: 'The disturbance causes clinically significant distress or impairment in social, occupational, or other important areas of functioning.' },
            { label: 'E', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the physiological effects of a substance (e.g., medication or alcohol) or another medical condition (e.g., mild traumatic brain injury) and is not better explained by brief psychotic disorder.' }
          ],
          specifiers: [],
          duration: 'Key timeframe: 3 days to 1 month after trauma. If symptoms persist beyond 1 month, evaluate for PTSD.',
          exclusions: 'Requires 9 of 14 symptoms (lower threshold than PTSD\'s cluster-specific requirements). Duration distinguishes from PTSD (>1 month). Rule out brief psychotic disorder and substance/medical causes.'
        }
      ]
    },
    {
      id: 'psychotic',
      name: 'Schizophrenia Spectrum and Other Psychotic Disorders',
      color: '#3dba55',
      disorders: [
        {
          id: 'schizophrenia',
          name: 'Schizophrenia',
          code: 'F20.9',
          criteria: [
            {
              label: 'A',
              title: 'Two or more of the following for at least 1 month (at least one must be 1, 2, or 3)',
              text: 'Two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated). At least one of these must be (1), (2), or (3):',
              subcriteria: [
                { label: '1', text: 'Delusions.' },
                { label: '2', text: 'Hallucinations.' },
                { label: '3', text: 'Disorganized speech (e.g., frequent derailment or incoherence).' },
                { label: '4', text: 'Grossly disorganized or catatonic behavior.' },
                { label: '5', text: 'Negative symptoms (i.e., diminished emotional expression or avolition).' }
              ]
            },
            { label: 'B', title: 'Social/occupational dysfunction', text: 'For a significant portion of the time since the onset of the disturbance, level of functioning in one or more major areas, such as work, interpersonal relations, or self-care, is markedly below the level achieved prior to the onset (or when the onset is in childhood or adolescence, there is failure to achieve expected level of interpersonal, academic, or occupational functioning).' },
            { label: 'C', title: 'Continuous disturbance for at least 6 months', text: 'Continuous signs of the disturbance persist for at least 6 months. This 6-month period must include at least 1 month of symptoms (or less if successfully treated) that meet Criterion A (i.e., active-phase symptoms) and may include periods of prodromal or residual symptoms. During these prodromal or residual periods, the signs of the disturbance may be manifested by only negative symptoms or by two or more symptoms listed in Criterion A present in an attenuated form (e.g., odd beliefs, unusual perceptual experiences).' },
            { label: 'D', title: 'Not schizoaffective or mood disorder with psychosis', text: 'Schizoaffective disorder and depressive or bipolar disorder with psychotic features have been ruled out because either (1) no major depressive or manic episodes have occurred concurrently with the active-phase symptoms, or (2) if mood episodes have occurred during active-phase symptoms, they have been present for a minority of the total duration of the active and residual periods of the illness.' },
            { label: 'E', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the physiological effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.' },
            { label: 'F', title: 'No history of ASD or communication disorder', text: 'If there is a history of autism spectrum disorder or a communication disorder of childhood onset, the additional diagnosis of schizophrenia is made only if prominent delusions or hallucinations, in addition to the other required symptoms of schizophrenia, are also present for at least 1 month (or less if successfully treated).' }
          ],
          specifiers: ['First episode, currently in acute episode / partial remission / full remission', 'Multiple episodes...', 'Continuous', 'Unspecified', 'With catatonia'],
          duration: 'Active phase: at least 1 month. Total continuous disturbance: at least 6 months (including prodromal/residual).',
          exclusions: 'Key distinction: Criterion D requires ruling out schizoaffective disorder (mood episodes are present for minority of total duration). 6-month total duration distinguishes from schizophreniform disorder (1-6 months). Must rule out substance/medical causes and ASD.'
        },
        {
          id: 'schizoaffective',
          name: 'Schizoaffective Disorder',
          code: 'F25.x',
          criteria: [
            { label: 'A', title: 'Concurrent psychotic and mood symptoms meeting Criterion A of schizophrenia', text: 'An uninterrupted period of illness during which there is a major mood episode (major depressive or manic) concurrent with Criterion A of schizophrenia. Note: The major depressive episode must include Criterion A1: depressed mood.' },
            { label: 'B', title: 'Delusions or hallucinations for 2+ weeks without mood episode', text: 'Delusions or hallucinations for 2 or more weeks in the absence of a major mood episode (depressive or manic) during the lifetime duration of the illness.' },
            { label: 'C', title: 'Mood episode present for majority of total duration', text: 'Symptoms that meet criteria for a major mood episode are present for the majority of the total duration of the active and residual portions of the illness.' },
            { label: 'D', title: 'Not attributable to substance or medical condition', text: 'The disturbance is not attributable to the effects of a substance (e.g., a drug of abuse, a medication) or another medical condition.' }
          ],
          specifiers: ['Bipolar type (manic or mixed and MDE)', 'Depressive type (only MDE)', 'With catatonia'],
          duration: 'Criterion B: psychosis present for at least 2 weeks without a mood episode. Criterion C: mood episodes present for the majority of total illness duration.',
          exclusions: 'The defining feature is Criterion B (psychosis without mood for 2+ weeks) distinguishing it from MDD/Bipolar with psychotic features. Criterion C (mood for majority of illness) distinguishes it from schizophrenia.'
        },
        {
          id: 'delusional',
          name: 'Delusional Disorder',
          code: 'F22',
          criteria: [
            { label: 'A', title: 'One or more delusions for at least 1 month', text: 'The presence of one (or more) delusions with a duration of 1 month or longer.' },
            { label: 'B', title: 'Criterion A of schizophrenia has never been met', text: 'Criterion A for schizophrenia has never been met. Note: Hallucinations, if present, are not prominent and are related to the delusional theme (e.g., the sensation of being infested with insects associated with delusions of infestation).' },
            { label: 'C', title: 'Functioning not markedly impaired apart from delusional impact', text: 'Apart from the impact of the delusion(s) or its ramifications, functioning is not markedly impaired, and behavior is not obviously bizarre or odd.' },
            { label: 'D', title: 'No manic or depressive episodes, or these are brief', text: 'If manic or major depressive episodes have occurred, these have been brief relative to the duration of the delusional periods.' },
            { label: 'E', title: 'Not attributable to substance, medical condition, or other mental disorder', text: 'The disturbance is not attributable to the physiological effects of a substance or another medical condition and is not better explained by another mental disorder, such as body dysmorphic disorder or obsessive-compulsive disorder.' }
          ],
          specifiers: ['Erotomanic type', 'Grandiose type', 'Jealous type', 'Persecutory type', 'Somatic type', 'Mixed type', 'Unspecified type', 'With bizarre content'],
          duration: 'Delusions present for at least 1 month.',
          exclusions: 'Criterion B (never met schizophrenia Criterion A) and Criterion C (functioning not markedly impaired) are key. The delusions must be non-bizarre in the non-specified form. Distinguished from schizophrenia by absence of other positive symptoms and relative preservation of functioning.'
        }
      ]
    },
    {
      id: 'personality',
      name: 'Personality Disorders',
      color: '#e879f9',
      disorders: [
        {
          id: 'bpd',
          name: 'Borderline Personality Disorder',
          code: 'F60.3',
          criteria: [
            {
              label: 'A',
              title: 'Five or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of instability of interpersonal relationships, self-image, and affects, and marked impulsivity, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Frantic efforts to avoid real or imagined abandonment. (Note: Do not include suicidal or self-mutilating behavior covered in Criterion 5.)' },
                { label: '2', text: 'A pattern of unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation.' },
                { label: '3', text: 'Identity disturbance: markedly and persistently unstable self-image or sense of self.' },
                { label: '4', text: 'Impulsivity in at least two areas that are potentially self-damaging (e.g., spending, sex, substance abuse, reckless driving, binge eating). (Note: Do not include suicidal or self-mutilating behavior covered in Criterion 5.)' },
                { label: '5', text: 'Recurrent suicidal behavior, gestures, or threats, or self-mutilating behavior.' },
                { label: '6', text: 'Affective instability due to a marked reactivity of mood (e.g., intense episodic dysphoria, irritability, or anxiety usually lasting a few hours and only rarely more than a few days).' },
                { label: '7', text: 'Chronic feelings of emptiness.' },
                { label: '8', text: 'Inappropriate, intense anger or difficulty controlling anger (e.g., frequent displays of temper, constant anger, recurrent physical fights).' },
                { label: '9', text: 'Transient, stress-related paranoid ideation or severe dissociative symptoms.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern present across many contexts, beginning by early adulthood. Not limited to episodes of Axis I conditions.',
          exclusions: 'Must be distinguished from mood disorders with unstable mood, bipolar disorder, dissociative disorders, and other personality disorders. Must not be attributable solely to another medical condition or substance.'
        },
        {
          id: 'npd',
          name: 'Narcissistic Personality Disorder',
          code: 'F60.81',
          criteria: [
            {
              label: 'A',
              title: 'Five or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of grandiosity (in fantasy or behavior), need for admiration, and lack of empathy, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Has a grandiose sense of self-importance (e.g., exaggerates achievements and talents, expects to be recognized as superior without commensurate achievements).' },
                { label: '2', text: 'Is preoccupied with fantasies of unlimited success, power, brilliance, beauty, or ideal love.' },
                { label: '3', text: 'Believes that he or she is "special" and unique and can only be understood by, or should associate with, other special or high-status people (or institutions).' },
                { label: '4', text: 'Requires excessive admiration.' },
                { label: '5', text: 'Has a sense of entitlement (i.e., unreasonable expectations of especially favorable treatment or automatic compliance with his or her expectations).' },
                { label: '6', text: 'Is interpersonally exploitative (i.e., takes advantage of others to achieve his or her own ends).' },
                { label: '7', text: 'Lacks empathy: is unwilling to recognize or identify with the feelings and needs of others.' },
                { label: '8', text: 'Is often envious of others or believes that others are envious of him or her.' },
                { label: '9', text: 'Shows arrogant, haughty behaviors or attitudes.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood, present in a variety of contexts.',
          exclusions: 'Requires 5 of 9 criteria. Must distinguish from manic episodes (grandiosity), antisocial PD (exploitation), and histrionic PD (attention-seeking). Grandiosity and lack of empathy are core features.'
        },
        {
          id: 'aspd',
          name: 'Antisocial Personality Disorder',
          code: 'F60.2',
          criteria: [
            {
              label: 'A',
              title: 'Pervasive pattern of disregard for rights of others since age 15 (3 or more)',
              text: 'A pervasive pattern of disregard for and violation of the rights of others, occurring since age 15 years, as indicated by three (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Failure to conform to social norms with respect to lawful behaviors, as indicated by repeatedly performing acts that are grounds for arrest.' },
                { label: '2', text: 'Deceitfulness, as indicated by repeated lying, use of aliases, or conning others for personal profit or pleasure.' },
                { label: '3', text: 'Impulsivity or failure to plan ahead.' },
                { label: '4', text: 'Irritability and aggressiveness, as indicated by repeated physical fights or assaults.' },
                { label: '5', text: 'Reckless disregard for safety of self or others.' },
                { label: '6', text: 'Consistent irresponsibility, as indicated by repeated failure to sustain consistent work behavior or honor financial obligations.' },
                { label: '7', text: 'Lack of remorse, as indicated by being indifferent to or rationalizing having hurt, mistreated, or stolen from another.' }
              ]
            },
            { label: 'B', title: 'Individual is at least 18 years old', text: 'The individual is at least 18 years old.' },
            { label: 'C', title: 'Evidence of Conduct Disorder before age 15', text: 'There is evidence of conduct disorder with onset before age 15 years.' },
            { label: 'D', title: 'Not exclusively during schizophrenia or bipolar disorder', text: 'The occurrence of antisocial behavior is not exclusively during the course of schizophrenia or bipolar disorder.' }
          ],
          specifiers: [],
          duration: 'Pervasive pattern since age 15. Cannot be diagnosed before age 18. Must have evidence of Conduct Disorder before age 15.',
          exclusions: 'Requires prior Conduct Disorder (before 15) and current age 18+. Distinguish from narcissistic PD, borderline PD (impulsivity/self-harm focus), and substance use disorders where antisocial behavior is exclusively related to substance-seeking.'
        },
        {
          id: 'paranoid_pd',
          name: 'Paranoid Personality Disorder',
          code: 'F60.0',
          criteria: [
            {
              label: 'A',
              title: 'Four or more of the following beginning by early adulthood',
              text: 'A pervasive distrust and suspiciousness of others such that their motives are interpreted as malevolent, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Suspects, without sufficient basis, that others are exploiting, harming, or deceiving him or her.' },
                { label: '2', text: 'Is preoccupied with unjustified doubts about the loyalty or trustworthiness of friends or associates.' },
                { label: '3', text: 'Is reluctant to confide in others because of unwarranted fear that the information will be used maliciously against him or her.' },
                { label: '4', text: 'Reads hidden demeaning or threatening meanings into benign remarks or events.' },
                { label: '5', text: 'Persistently bears grudges (i.e., is unforgiving of insults, injuries, or slights).' },
                { label: '6', text: 'Perceives attacks on his or her character or reputation that are not apparent to others and is quick to react angrily or to counterattack.' },
                { label: '7', text: 'Has recurrent suspicions, without justification, regarding fidelity of spouse or sexual partner.' }
              ]
            },
            { label: 'B', title: 'Not exclusively during schizophrenia, bipolar, or depressive disorder with psychotic features', text: 'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, or another psychotic disorder and is not attributable to the physiological effects of another medical condition.' }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 4 of 7 criteria.',
          exclusions: 'Must rule out schizophrenia, psychotic mood disorders, and delusional disorder (persecutory type). Distinguished from those by absence of persistent psychosis and by functioning being maintained.'
        },
        {
          id: 'schizoid_pd',
          name: 'Schizoid Personality Disorder',
          code: 'F60.1',
          criteria: [
            {
              label: 'A',
              title: 'Four or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of detachment from social relationships and a restricted range of expression of emotions in interpersonal settings, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Neither desires nor enjoys close relationships, including being part of a family.' },
                { label: '2', text: 'Almost always chooses solitary activities.' },
                { label: '3', text: 'Has little, if any, interest in having sexual experiences with another person.' },
                { label: '4', text: 'Takes pleasure in few, if any, activities.' },
                { label: '5', text: 'Lacks close friends or confidants other than first-degree relatives.' },
                { label: '6', text: 'Appears indifferent to the praise or criticism of others.' },
                { label: '7', text: 'Shows emotional coldness, detachment, or flattened affectivity.' }
              ]
            },
            { label: 'B', title: 'Not exclusively during schizophrenia or ASD', text: 'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder and is not attributable to the physiological effects of another medical condition.' }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 4 of 7 criteria.',
          exclusions: 'Distinguished from schizotypal PD (magical thinking, odd perception), avoidant PD (desires relationships but fears rejection), and ASD (broader social communication deficits). Key: ego-syntonic preference for solitude without psychotic features.'
        },
        {
          id: 'schizotypal_pd',
          name: 'Schizotypal Personality Disorder',
          code: 'F21',
          criteria: [
            {
              label: 'A',
              title: 'Five or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of social and interpersonal deficits marked by acute discomfort with, and reduced capacity for, close relationships as well as by cognitive or perceptual distortions and eccentricities of behavior, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Ideas of reference (excluding delusions of reference).' },
                { label: '2', text: 'Odd beliefs or magical thinking that influences behavior and is inconsistent with subcultural norms (e.g., superstitiousness, belief in clairvoyance, telepathy, or "sixth sense"; in children and adolescents, bizarre fantasies or preoccupations).' },
                { label: '3', text: 'Unusual perceptual experiences, including bodily illusions.' },
                { label: '4', text: 'Odd thinking and speech (e.g., vague, circumstantial, metaphorical, overelaborate, or stereotyped).' },
                { label: '5', text: 'Suspiciousness or paranoid ideation.' },
                { label: '6', text: 'Inappropriate or constricted affect.' },
                { label: '7', text: 'Behavior or appearance that is odd, eccentric, or peculiar.' },
                { label: '8', text: 'Lack of close friends or confidants other than first-degree relatives.' },
                { label: '9', text: 'Excessive social anxiety that does not diminish with familiarity and tends to be associated with paranoid fears rather than negative judgments about self.' }
              ]
            },
            { label: 'B', title: 'Not exclusively during schizophrenia or ASD', text: 'Does not occur exclusively during the course of schizophrenia, a bipolar disorder or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder.' }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 5 of 9 criteria.',
          exclusions: 'Schizotypal PD is also classified as a schizophrenia spectrum disorder in DSM-5. Distinguished from schizophrenia by absence of frank psychosis. Distinguished from schizoid PD by the odd perceptual/cognitive symptoms. Requires 5 of 9 (highest threshold among Cluster A).'
        },
        {
          id: 'histrionic_pd',
          name: 'Histrionic Personality Disorder',
          code: 'F60.4',
          criteria: [
            {
              label: 'A',
              title: 'Five or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of excessive emotionality and attention seeking, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Is uncomfortable in situations in which he or she is not the center of attention.' },
                { label: '2', text: 'Interaction with others is often characterized by inappropriate sexually seductive or provocative behavior.' },
                { label: '3', text: 'Displays rapidly shifting and shallow expression of emotions.' },
                { label: '4', text: 'Consistently uses physical appearance to draw attention to self.' },
                { label: '5', text: 'Has a style of speech that is excessively impressionistic and lacking in detail.' },
                { label: '6', text: 'Shows self-dramatization, theatricality, and exaggerated expression of emotion.' },
                { label: '7', text: 'Is suggestible (i.e., easily influenced by others or circumstances).' },
                { label: '8', text: 'Considers relationships to be more intimate than they actually are.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 5 of 8 criteria.',
          exclusions: 'Distinguished from NPD (grandiosity focus vs. attention focus), BPD (more self-harm and abandonment fear), and dependent PD (submissive vs. attention-seeking). Seductive behavior and emotional theatricality are core features.'
        },
        {
          id: 'avoidant_pd',
          name: 'Avoidant Personality Disorder',
          code: 'F60.6',
          criteria: [
            {
              label: 'A',
              title: 'Four or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Avoids occupational activities that involve significant interpersonal contact because of fears of criticism, disapproval, or rejection.' },
                { label: '2', text: 'Is unwilling to get involved with people unless certain of being liked.' },
                { label: '3', text: 'Shows restraint within intimate relationships because of the fear of being shamed or ridiculed.' },
                { label: '4', text: 'Is preoccupied with being criticized or rejected in social situations.' },
                { label: '5', text: 'Is inhibited in new interpersonal situations because of feelings of inadequacy.' },
                { label: '6', text: 'Views self as socially inept, personally unappealing, or inferior to others.' },
                { label: '7', text: 'Is unusually reluctant to take personal risks or to engage in any new activities because they may prove embarrassing.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 4 of 7 criteria.',
          exclusions: 'Distinguished from schizoid PD (desires relationships but fears rejection vs. ego-syntonic preference for solitude). Highly comorbid with social anxiety disorder (some consider them on the same spectrum). Distinguished from dependent PD (fear of rejection vs. fear of abandonment).'
        },
        {
          id: 'dependent_pd',
          name: 'Dependent Personality Disorder',
          code: 'F60.7',
          criteria: [
            {
              label: 'A',
              title: 'Five or more of the following beginning by early adulthood',
              text: 'A pervasive and excessive need to be taken care of that leads to submissive and clinging behavior and fears of separation, beginning by early adulthood and present in a variety of contexts, as indicated by five (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Has difficulty making everyday decisions without an excessive amount of advice and reassurance from others.' },
                { label: '2', text: 'Needs others to assume responsibility for most major areas of his or her life.' },
                { label: '3', text: 'Has difficulty expressing disagreement with others because of fear of loss of support or approval. (Note: Do not include realistic fears of retribution.)' },
                { label: '4', text: 'Has difficulty initiating projects or doing things on his or her own (because of a lack of self-confidence in judgment or abilities rather than a lack of motivation or energy).' },
                { label: '5', text: 'Goes to excessive lengths to obtain nurturance and support from others, to the point of volunteering to do things that are unpleasant.' },
                { label: '6', text: 'Feels uncomfortable or helpless when alone because of exaggerated fears of being unable to care for himself or herself.' },
                { label: '7', text: 'Urgently seeks another relationship as a source of care and support when a close relationship ends.' },
                { label: '8', text: 'Is unrealistically preoccupied with fears of being left to take care of himself or herself.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 5 of 8 criteria.',
          exclusions: 'Distinguished from BPD (fear of abandonment + intense unstable relationships vs. quiet submissiveness). Differs from separation anxiety disorder by onset (adult vs. childhood) and pervasive nature. Rule out medical conditions causing dependence.'
        },
        {
          id: 'ocpd',
          name: 'Obsessive-Compulsive Personality Disorder',
          code: 'F60.5',
          criteria: [
            {
              label: 'A',
              title: 'Four or more of the following beginning by early adulthood',
              text: 'A pervasive pattern of preoccupation with orderliness, perfectionism, and mental and interpersonal control, at the expense of flexibility, openness, and efficiency, beginning by early adulthood and present in a variety of contexts, as indicated by four (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Is preoccupied with details, rules, lists, order, organization, or schedules to the extent that the major point of the activity is lost.' },
                { label: '2', text: 'Shows perfectionism that interferes with task completion (e.g., is unable to complete a project because his or her own overly strict standards are not met).' },
                { label: '3', text: 'Is excessively devoted to work and productivity to the exclusion of leisure activities and friendships (not accounted for by obvious economic necessity).' },
                { label: '4', text: 'Is overconscientious, scrupulous, and inflexible about matters of morality, ethics, or values (not accounted for by cultural or religious identification).' },
                { label: '5', text: 'Is unable to discard worn-out or worthless objects even when they have no sentimental value.' },
                { label: '6', text: 'Is reluctant to delegate tasks or to work with others unless they submit to exactly his or her way of doing things.' },
                { label: '7', text: 'Adopts a miserly spending style toward both self and others; money is viewed as something to be hoarded for future catastrophes.' },
                { label: '8', text: 'Shows rigidity and stubbornness.' }
              ]
            }
          ],
          specifiers: [],
          duration: 'Pervasive pattern beginning by early adulthood. Requires 4 of 8 criteria.',
          exclusions: 'OCPD differs from OCD in that OCPD is ego-syntonic (person values their traits) and lacks true obsessions/compulsions. Distinguished from narcissistic PD (rigidity/perfectionism vs. grandiosity). Criterion 5 (inability to discard) may look like hoarding but is not typically object accumulation.'
        }
      ]
    },
    {
      id: 'neurodevelopmental',
      name: 'Neurodevelopmental Disorders',
      color: '#7ee787',
      disorders: [
        {
          id: 'adhd',
          name: 'Attention-Deficit/Hyperactivity Disorder',
          code: 'F90.x',
          criteria: [
            {
              label: 'A',
              title: 'A persistent pattern of inattention and/or hyperactivity-impulsivity',
              text: 'A persistent pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development, as characterized by (1) and/or (2):',
              subcriteria: [
                { label: 'Inattention 1', text: 'Inattention: Six (or more) of the following symptoms have persisted for at least 6 months to a degree that is inconsistent with developmental level and that negatively impacts directly on social and academic/occupational activities. (Note: For older adolescents and adults age 17 and older, at least five symptoms are required.)' },
                { label: 'a', text: 'Often fails to give close attention to details or makes careless mistakes in schoolwork, at work, or during other activities.' },
                { label: 'b', text: 'Often has difficulty sustaining attention in tasks or play activities.' },
                { label: 'c', text: 'Often does not seem to listen when spoken to directly.' },
                { label: 'd', text: 'Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace.' },
                { label: 'e', text: 'Often has difficulty organizing tasks and activities.' },
                { label: 'f', text: 'Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort.' },
                { label: 'g', text: 'Often loses things necessary for tasks or activities.' },
                { label: 'h', text: 'Is often easily distracted by extraneous stimuli.' },
                { label: 'i', text: 'Is often forgetful in daily activities.' },
                { label: 'Hyperactivity 2', text: 'Hyperactivity and Impulsivity: Six (or more) of the following symptoms have persisted for at least 6 months (five or more for ages 17+):' },
                { label: 'a', text: 'Often fidgets with or taps hands or feet or squirms in seat.' },
                { label: 'b', text: 'Often leaves seat in situations when remaining seated is expected.' },
                { label: 'c', text: 'Often runs about or climbs in situations where it is inappropriate. (In adolescents or adults, may be limited to feeling restless.)' },
                { label: 'd', text: 'Often unable to play or engage in leisure activities quietly.' },
                { label: 'e', text: 'Is often "on the go," acting as if "driven by a motor."' },
                { label: 'f', text: 'Often talks excessively.' },
                { label: 'g', text: 'Often blurts out an answer before a question has been completed.' },
                { label: 'h', text: 'Often has difficulty waiting his or her turn.' },
                { label: 'i', text: 'Often interrupts or intrudes on others.' }
              ]
            },
            { label: 'B', title: 'Symptoms present before age 12', text: 'Several inattentive or hyperactive-impulsive symptoms were present prior to age 12 years.' },
            { label: 'C', title: 'Symptoms present in two or more settings', text: 'Several inattentive or hyperactive-impulsive symptoms are present in two or more settings (e.g., at home, school, or work; with friends or relatives; in other activities).' },
            { label: 'D', title: 'Clear evidence of interference with functioning', text: 'There is clear evidence that the symptoms interfere with, or reduce the quality of, social, academic, or occupational functioning.' },
            { label: 'E', title: 'Not exclusively during psychosis or better explained by another disorder', text: 'The symptoms do not occur exclusively during the course of schizophrenia or another psychotic disorder and are not better explained by another mental disorder (e.g., mood disorder, anxiety disorder, dissociative disorder, personality disorder, substance intoxication or withdrawal).' }
          ],
          specifiers: ['Combined presentation (Criterion A1 and A2 for past 6 months)', 'Predominantly inattentive presentation', 'Predominantly hyperactive/impulsive presentation', 'In partial remission', 'Mild / Moderate / Severe'],
          duration: 'Symptoms present for at least 6 months; onset before age 12; present in 2+ settings.',
          exclusions: 'Must rule out psychotic disorders, mood disorders, anxiety disorders, dissociative disorders, and personality disorders. Symptoms must be inconsistent with developmental level. For ages 17+, threshold drops to 5 symptoms (from 6).'
        },
        {
          id: 'asd',
          name: 'Autism Spectrum Disorder',
          code: 'F84.0',
          criteria: [
            {
              label: 'A',
              title: 'Persistent deficits in social communication and interaction (all three)',
              text: 'Persistent deficits in social communication and social interaction across multiple contexts, as manifested by all three of the following, currently or by history:',
              subcriteria: [
                { label: '1', text: 'Deficits in social-emotional reciprocity (e.g., abnormal social approach and failure of normal back-and-forth conversation; reduced sharing of interests, emotions, or affect; failure to initiate or respond to social interactions).' },
                { label: '2', text: 'Deficits in nonverbal communicative behaviors used for social interaction (e.g., poorly integrated verbal and nonverbal communication; abnormalities in eye contact and body language; deficits in understanding and use of gestures; total lack of facial expressions and nonverbal communication).' },
                { label: '3', text: 'Deficits in developing, maintaining, and understanding relationships (e.g., difficulties adjusting behavior to suit various social contexts; difficulties in sharing imaginative play or in making friends; absence of interest in peers).' }
              ]
            },
            {
              label: 'B',
              title: 'Two or more restricted, repetitive behaviors (currently or by history)',
              text: 'Restricted, repetitive patterns of behavior, interests, or activities, as manifested by two (or more) of the following, currently or by history:',
              subcriteria: [
                { label: '1', text: 'Stereotyped or repetitive motor movements, use of objects, or speech (e.g., simple motor stereotypies, lining up toys or flipping objects, echolalia, idiosyncratic phrases).' },
                { label: '2', text: 'Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior (e.g., extreme distress at small changes, difficulties with transitions, rigid thinking patterns, greeting rituals, need to take same route or eat the same food every day).' },
                { label: '3', text: 'Highly restricted, fixated interests that are abnormal in intensity or focus (e.g., strong attachment to or preoccupation with unusual objects, excessively circumscribed or perseverative interests).' },
                { label: '4', text: 'Hyper- or hyporeactivity to sensory input or unusual interest in sensory aspects of the environment (e.g., apparent indifference to pain/temperature, adverse responses to specific sounds or textures, excessive smelling or touching of objects, visual fascination with lights or movement).' }
              ]
            },
            { label: 'C', title: 'Symptoms present in early developmental period', text: 'Symptoms must be present in the early developmental period (but may not fully manifest until social demands exceed limited capacities, or may be masked by learned strategies later in life).' },
            { label: 'D', title: 'Clinically significant impairment', text: 'Symptoms cause clinically significant impairment in social, occupational, or other important areas of current functioning.' },
            { label: 'E', title: 'Not better explained by intellectual disability or global developmental delay', text: 'These disturbances are not better explained by intellectual disability (intellectual developmental disorder) or global developmental delay. Intellectual disability and autism spectrum disorder frequently co-occur; to make comorbid diagnoses of autism spectrum disorder and intellectual disability, social communication should be below that expected for general developmental level.' }
          ],
          specifiers: ['With or without accompanying intellectual impairment', 'With or without accompanying language impairment', 'Associated with known medical, genetic, or environmental condition/factor', 'Associated with another neurodevelopmental, mental, or behavioral disorder', 'With catatonia', 'Severity levels (1-3) based on social communication and restricted/repetitive behaviors'],
          duration: 'Symptoms present in early developmental period, though may not fully manifest until social demands increase.',
          exclusions: 'ASD subsumes prior diagnoses of Autistic Disorder, Asperger syndrome, Childhood Disintegrative Disorder, and PDD-NOS. All 3 social communication criteria (Criterion A) must be met. At least 2 of 4 restricted/repetitive behavior criteria (Criterion B) must be met.'
        }
      ]
    },
    {
      id: 'eating',
      name: 'Feeding and Eating Disorders',
      color: '#fb923c',
      disorders: [
        {
          id: 'anorexia',
          name: 'Anorexia Nervosa',
          code: 'F50.0x',
          criteria: [
            { label: 'A', title: 'Restriction of energy intake relative to requirements', text: 'Restriction of energy intake relative to requirements, leading to a significantly low body weight in the context of age, sex, developmental trajectory, and physical health. Significantly low weight is defined as a weight that is less than minimally normal or, for children and adolescents, less than that minimally expected.' },
            { label: 'B', title: 'Intense fear of gaining weight or persistent behavior that interferes with weight gain', text: 'Intense fear of gaining weight or of becoming fat, or persistent behavior that interferes with weight gain, even though at a significantly low weight.' },
            { label: 'C', title: 'Disturbed body image or denial of low body weight seriousness', text: 'Disturbance in the way in which one\'s body weight or shape is experienced, undue influence of body weight or shape on self-evaluation, or persistent lack of recognition of the seriousness of the current low body weight.' }
          ],
          specifiers: ['Restricting type (no binge-purge in last 3 months)', 'Binge-eating/purging type', 'Partial remission', 'Full remission', 'Mild (BMI >= 17)', 'Moderate (BMI 16-16.99)', 'Severe (BMI 15-15.99)', 'Extreme (BMI < 15)'],
          duration: 'No specific minimum duration; current weight and behaviors are the focus.',
          exclusions: 'Must rule out medical causes of low weight. Distinguished from bulimia nervosa by the presence of significantly low body weight. Criterion B can be met by behavior (e.g., excessive exercise) even without verbalized fear. Criterion C (denial) is a key cultural consideration.'
        },
        {
          id: 'bulimia',
          name: 'Bulimia Nervosa',
          code: 'F50.2',
          criteria: [
            { label: 'A', title: 'Recurrent episodes of binge eating', text: 'Recurrent episodes of binge eating. An episode of binge eating is characterized by both of the following: (1) Eating, in a discrete period of time (e.g., within any 2-hour period), an amount of food that is definitely larger than what most people would eat in a similar period of time under similar circumstances; and (2) A sense of lack of control over eating during the episode (e.g., a feeling that one cannot stop eating or control what or how much one is eating).' },
            { label: 'B', title: 'Recurrent inappropriate compensatory behaviors', text: 'Recurrent inappropriate compensatory behavior in order to prevent weight gain, such as self-induced vomiting; misuse of laxatives, diuretics, or other medications; fasting; or excessive exercise.' },
            { label: 'C', title: 'Average once a week for 3 months', text: 'The binge eating and inappropriate compensatory behaviors both occur, on average, at least once a week for 3 months.' },
            { label: 'D', title: 'Self-evaluation unduly influenced by body shape and weight', text: 'Self-evaluation is unduly influenced by body shape and weight.' },
            { label: 'E', title: 'Not occurring exclusively during anorexia nervosa', text: 'The disturbance does not occur exclusively during episodes of anorexia nervosa.' }
          ],
          specifiers: ['Partial remission', 'Full remission', 'Mild (1-3 episodes/week)', 'Moderate (4-7/week)', 'Severe (8-13/week)', 'Extreme (14+/week)'],
          duration: 'Binge-purge cycle at least once per week for 3 months.',
          exclusions: 'Cannot be diagnosed during a period of anorexia nervosa (if criteria for both are met, only anorexia is diagnosed). Distinguished from BED by the presence of compensatory behaviors. Rule out medical causes (pyloric stenosis, Kleine-Levin syndrome).'
        },
        {
          id: 'bed',
          name: 'Binge-Eating Disorder',
          code: 'F50.81',
          criteria: [
            {
              label: 'A',
              title: 'Recurrent episodes of binge eating',
              text: 'Recurrent episodes of binge eating. An episode of binge eating is characterized by both of the following: (1) Eating, in a discrete period of time, an amount of food that is definitely larger than what most people would eat in a similar period of time under similar circumstances; (2) A sense of lack of control over eating during the episode.',
            },
            {
              label: 'B',
              title: 'Three or more of the following associated features',
              text: 'The binge-eating episodes are associated with three (or more) of the following:',
              subcriteria: [
                { label: '1', text: 'Eating much more rapidly than normal.' },
                { label: '2', text: 'Eating until feeling uncomfortably full.' },
                { label: '3', text: 'Eating large amounts of food when not feeling physically hungry.' },
                { label: '4', text: 'Eating alone because of feeling embarrassed by how much one is eating.' },
                { label: '5', text: 'Feeling disgusted with oneself, depressed, or very guilty afterward.' }
              ]
            },
            { label: 'C', title: 'Marked distress regarding binge eating', text: 'Marked distress regarding binge eating is present.' },
            { label: 'D', title: 'At least once a week for 3 months', text: 'The binge eating occurs, on average, at least once a week for 3 months.' },
            { label: 'E', title: 'No recurrent use of inappropriate compensatory behavior', text: 'The binge eating is not associated with the recurrent use of inappropriate compensatory behavior as in bulimia nervosa and does not occur exclusively during the course of bulimia nervosa or anorexia nervosa.' }
          ],
          specifiers: ['Partial remission', 'Full remission', 'Mild (1-3 binge days/week)', 'Moderate (4-7/week)', 'Severe (8-13/week)', 'Extreme (14+/week)'],
          duration: 'At least once per week for 3 months.',
          exclusions: 'Distinguished from bulimia nervosa by absence of compensatory behaviors (Criterion E). Distinguished from anorexia binge/purge type by normal or elevated weight and no compensatory behaviors. Criterion B (3+ features) and Criterion C (marked distress) are important for threshold.'
        }
      ]
    }
  ]
};

// ============================================================
// FLASHCARDS - CURATED PEARLS PER DISORDER
// Each entry: { front, back, tag: 'mnemonic'|'pearl'|'differential' }
// Combined with auto-generated cards from criteria/duration/exclusions.
// ============================================================
const FLASHCARDS_EXTRA = {
  // --- DEPRESSIVE ---
  mdd: [
    { front: 'Mnemonic for MDD Criterion A symptoms?', back: 'SIG E CAPS\n• S — Sleep (insomnia / hypersomnia)\n• I — Interest loss (anhedonia)\n• G — Guilt / worthlessness\n• E — Energy loss / fatigue\n• C — Concentration impaired\n• A — Appetite / weight change\n• P — Psychomotor agitation or retardation\n• S — Suicidal ideation\nPlus depressed mood. Need ≥5 in same 2-week period; at least one must be depressed mood OR anhedonia.', tag: 'mnemonic' },
    { front: 'Minimum number of MDD symptoms and required "gateway" symptoms?', back: '≥5 of 9 symptoms in the same 2-week period. At least ONE must be (1) depressed mood, OR (2) loss of interest/pleasure (anhedonia).', tag: 'pearl' },
    { front: 'Key MDD weight change threshold?', back: '>5% of body weight in a month (when not dieting), or significant change in appetite nearly every day.', tag: 'pearl' },
    { front: 'How does MDD differ from Persistent Depressive Disorder?', back: 'MDD: ≥5 symptoms, episodic, ≥2 weeks.\nPDD: ≥2 symptoms, chronic, ≥2 years (1 yr in children/adolescents), never symptom-free >2 mo.\n"Double depression" = PDD with superimposed MDE.', tag: 'differential' },
    { front: 'What automatically rules out MDD?', back: 'Any history of a manic or hypomanic episode (unless substance/medication-induced and resolving with that substance). One manic episode → Bipolar I; one hypomanic + MDE → Bipolar II.', tag: 'differential' },
    { front: 'MDD specifiers worth memorizing?', back: '• With anxious distress\n• With mixed features\n• With melancholic features\n• With atypical features\n• With psychotic features (mood-congruent/incongruent)\n• With catatonia\n• With peripartum onset (during pregnancy or within 4 wks postpartum)\n• With seasonal pattern (recurrent only)', tag: 'specifier' }
  ],
  pdd: [
    { front: 'PDD duration requirement (adults vs children)?', back: 'Adults: ≥2 years of depressed mood more days than not.\nChildren/adolescents: ≥1 year, and mood may be IRRITABLE rather than depressed.\nNever symptom-free for more than 2 consecutive months during that period.', tag: 'pearl' },
    { front: 'PDD requires how many of which symptoms?', back: '≥2 of 6: poor appetite/overeating, insomnia/hypersomnia, low energy, low self-esteem, poor concentration/decisions, hopelessness.', tag: 'pearl' },
    { front: 'What is "double depression"?', back: 'Persistent Depressive Disorder + a superimposed Major Depressive Episode. DSM-5 allows BOTH diagnoses concurrently (a change from DSM-IV).', tag: 'pearl' }
  ],
  dmdd: [
    { front: 'DMDD age window and onset rule?', back: 'Diagnosed only between ages 6 and 18.\nSymptom onset must be BEFORE age 10.', tag: 'pearl' },
    { front: 'DMDD outburst frequency and setting rules?', back: 'Severe temper outbursts ≥3 times per week, for ≥12 months, with no symptom-free period >3 months.\nIrritable/angry mood between outbursts most of the day, nearly every day.\nPresent in ≥2 of 3 settings (home/school/peers); severe in ≥1.', tag: 'pearl' },
    { front: 'DMDD vs Bipolar — why can\'t both be diagnosed?', back: 'DMDD was created (DSM-5) to capture chronically irritable kids who were being overdiagnosed with bipolar. Bipolar requires DISTINCT episodes ≥1 day. DMDD describes a chronic, non-episodic irritable mood. Cannot coexist with bipolar (or with ODD — DMDD takes precedence).', tag: 'differential' }
  ],

  // --- BIPOLAR ---
  bipolar1: [
    { front: 'Mnemonic for manic episode symptoms?', back: 'DIG FAST\n• D — Distractibility\n• I — Irresponsibility / risky activities\n• G — Grandiosity / inflated self-esteem\n• F — Flight of ideas / racing thoughts\n• A — Activity increase / psychomotor agitation\n• S — Sleep decreased need\n• T — Talkativeness / pressured speech\nNeed ≥3 (4 if mood only irritable) PLUS abnormally elevated/expansive/irritable mood + increased energy.', tag: 'mnemonic' },
    { front: 'Bipolar I — what defines the manic episode?', back: '≥1 week of abnormally elevated/expansive/irritable mood + increased energy/activity, present most of the day, nearly every day. ANY DURATION counts if hospitalization is required.\nMust cause marked impairment, hospitalization, or have psychotic features.', tag: 'pearl' },
    { front: 'Does Bipolar I require a depressive episode?', back: 'NO. Only one lifetime MANIC episode is required. Depressive episodes are common and expected but not part of the diagnostic threshold.', tag: 'pearl' },
    { front: 'Antidepressant-induced mania — does it count for Bipolar I?', back: 'YES, if a full manic episode emerges during antidepressant treatment (medication, ECT) AND PERSISTS beyond the physiological effect of that treatment, it is sufficient evidence for a manic episode and a Bipolar I diagnosis.', tag: 'pearl' }
  ],
  bipolar2: [
    { front: 'Bipolar II — required episodes?', back: '≥1 hypomanic episode (≥4 consecutive days) AND ≥1 major depressive episode. NEVER a full manic episode (that would convert dx to Bipolar I).', tag: 'pearl' },
    { front: 'Hypomanic vs Manic episode — three key differences?', back: '1. Duration: hypomania ≥4 days vs mania ≥1 week (or any if hospitalized).\n2. Severity: hypomania has an unequivocal change observable by others but NO marked impairment / no hospitalization.\n3. Psychosis: any psychotic features automatically make the episode MANIC, not hypomanic.', tag: 'differential' },
    { front: 'Bipolar II "depressive predominance" — why does that matter?', back: 'Bipolar II patients spend much more time depressed than hypomanic. The depressive episodes drive most morbidity/suicide risk. Hypomanias are often missed → leading to misdiagnosis as MDD.', tag: 'pearl' }
  ],
  cyclothymia: [
    { front: 'Cyclothymia duration and threshold?', back: '≥2 years (≥1 year in children/adolescents) of numerous hypomanic and depressive symptoms that DO NOT meet full episode criteria.\nSymptoms present at least HALF the time, no symptom-free period >2 months.', tag: 'pearl' },
    { front: 'What converts cyclothymia to another diagnosis?', back: 'If criteria are met for a full hypomanic, manic, or major depressive episode AT ANY POINT, diagnosis changes to Bipolar I, Bipolar II, or MDD respectively (after the initial 2-yr period).', tag: 'differential' }
  ],

  // --- ANXIETY ---
  gad: [
    { front: 'GAD duration and frequency threshold?', back: 'Excessive anxiety/worry on MORE DAYS THAN NOT for ≥6 MONTHS, about multiple domains (e.g., work, school, health).', tag: 'pearl' },
    { front: 'Mnemonic for GAD physical/cognitive symptoms?', back: 'WATCHERS (or "3 C\'s + 3 S\'s")\n• Worry (excessive, uncontrollable) — required\n• Restlessness / on edge\n• Fatigue (easily)\n• Concentration difficulty / mind blank\n• Irritability\n• Muscle tension\n• Sleep disturbance\nNeed ≥3 of these 6 in adults (only 1 required in children).', tag: 'mnemonic' },
    { front: 'How does GAD differ from "normal" worry?', back: 'GAD worry is EXCESSIVE, UNCONTROLLABLE, pervasive across multiple domains, and causes impairment. Normal worry is proportionate, situation-specific, and does not impair functioning.', tag: 'differential' }
  ],
  panic: [
    { front: 'How many symptoms define a panic attack, and how fast must they peak?', back: '≥4 of 13 symptoms (cardiac, respiratory, autonomic, cognitive) reaching PEAK INTENSITY within MINUTES of onset.\nA "limited-symptom attack" has <4 symptoms but is otherwise similar.', tag: 'pearl' },
    { front: 'Panic Disorder vs isolated panic attacks?', back: 'Panic Disorder = RECURRENT UNEXPECTED attacks + ≥1 month of either: (a) persistent worry about more attacks/consequences, OR (b) maladaptive behavior change (avoidance).\nPanic attacks alone can occur in many disorders (specifier).', tag: 'pearl' },
    { front: 'What "fear" symptoms are part of panic attack criteria?', back: '• Fear of losing control or "going crazy"\n• Fear of dying\n• Derealization / depersonalization\nThese are cognitive symptoms among the 13.', tag: 'pearl' }
  ],
  sad: [
    { front: 'Core fear in Social Anxiety Disorder?', back: 'Fear of NEGATIVE EVALUATION — being humiliated, embarrassed, rejected, or offending others — in social situations involving possible scrutiny.', tag: 'pearl' },
    { front: 'SAD duration requirement?', back: '≥6 months (this applies to all DSM-5 phobic anxiety disorders: SAD, specific phobia, agoraphobia).', tag: 'pearl' },
    { front: 'SAD "performance only" specifier?', back: 'Fear is RESTRICTED to speaking or performing in public (e.g., musicians, public speakers) without anxiety in other social situations.', tag: 'specifier' }
  ],
  specific_phobia: [
    { front: 'Five specific phobia subtype specifiers?', back: '1. Animal (e.g., spiders, dogs)\n2. Natural environment (heights, storms, water)\n3. Blood-injection-injury (BII — often vasovagal/fainting)\n4. Situational (airplanes, elevators, enclosed places)\n5. Other (choking, vomiting; in children: loud sounds, costumed characters)', tag: 'specifier' },
    { front: 'What is unique about the Blood-Injection-Injury phobia subtype?', back: 'BII commonly triggers a VASOVAGAL response (drop in BP/HR → fainting), unlike other phobias which trigger sympathetic activation. Strong familial pattern.', tag: 'pearl' }
  ],
  agoraphobia: [
    { front: 'Five agoraphobic situations (need ≥2)?', back: '1. Public transportation\n2. Open spaces (parking lots, bridges)\n3. Enclosed places (shops, theaters)\n4. Standing in line or in a crowd\n5. Being outside the home alone\n≥2 of 5 required.', tag: 'pearl' },
    { front: 'Agoraphobia vs Panic Disorder relationship in DSM-5?', back: 'In DSM-5 they are SEPARATE diagnoses. Agoraphobia can be diagnosed with OR WITHOUT panic disorder. If both are present, code both.', tag: 'differential' },
    { front: 'Core cognitive feature of agoraphobia?', back: 'Fear that ESCAPE MIGHT BE DIFFICULT or help unavailable if panic-like/embarrassing/incapacitating symptoms occur (e.g., fear of falling in elderly; fear of incontinence).', tag: 'pearl' }
  ],

  // --- OCD ---
  ocd_dx: [
    { front: 'OCD time/impairment threshold?', back: 'Obsessions/compulsions take >1 HOUR per day OR cause clinically significant distress/impairment.', tag: 'pearl' },
    { front: 'OCD insight specifiers?', back: '• With GOOD or FAIR insight — recognizes beliefs are probably not true\n• With POOR insight — thinks beliefs are probably true\n• With ABSENT insight / delusional beliefs — completely convinced\n• Tic-related (current or past tic disorder)', tag: 'specifier' },
    { front: 'OCD vs OCPD?', back: 'OCD: EGO-DYSTONIC obsessions and compulsions; patient finds them distressing/unwanted.\nOCPD: EGO-SYNTONIC personality traits (perfectionism, rigidity); patient sees traits as correct/desirable. No true obsessions or compulsions.', tag: 'differential' },
    { front: 'How is OCD distinguished from GAD?', back: 'OCD obsessions = INTRUSIVE, unwanted, often bizarre or magical (contamination, harm, symmetry) → followed by neutralizing compulsions.\nGAD worry = excessive REAL-LIFE concerns (work, health, money) — not bizarre, no rituals.', tag: 'differential' }
  ],
  bdd: [
    { front: 'BDD — key feature distinguishing from "normal" appearance concern?', back: 'Perceived defects are NOT observable or appear only SLIGHT to others. Patient performs repetitive behaviors (mirror checking, grooming, comparing, reassurance seeking) in response.', tag: 'pearl' },
    { front: 'What is "muscle dysmorphia"?', back: 'A specifier for BDD where the preoccupation is that the body is too small or insufficiently muscular. Often seen in men; can drive steroid abuse, excessive exercise.', tag: 'specifier' },
    { front: 'BDD vs Eating Disorder?', back: 'If preoccupation is solely about body fat/weight AND patient meets criteria for an eating disorder → eating disorder diagnosis (BDD is excluded). BDD covers OTHER appearance flaws.', tag: 'differential' }
  ],
  hoarding: [
    { front: 'Hoarding Disorder — what drives the difficulty discarding?', back: 'A PERCEIVED NEED to save items + DISTRESS associated with discarding them. Items feel personally meaningful (unlike OCD-driven hoarding, which is driven by intrusive thoughts).', tag: 'pearl' },
    { front: 'Hoarding "With excessive acquisition" specifier — how common?', back: 'Present in ~80–90% of cases. Involves excessive buying, collecting free items, or stealing of items that are not needed or for which there is no space.', tag: 'specifier' }
  ],

  // --- TRAUMA ---
  ptsd: [
    { front: 'PTSD symptom clusters (4) and minimum count?', back: 'After Criterion A trauma exposure:\n• B — INTRUSION (≥1 of 5): memories, dreams, flashbacks, distress to cues, physiologic reactivity\n• C — AVOIDANCE (≥1 of 2): internal cues or external reminders\n• D — NEGATIVE COGNITIONS/MOOD (≥2 of 7)\n• E — AROUSAL/REACTIVITY (≥2 of 6)\nDuration F: >1 month.', tag: 'mnemonic' },
    { front: 'PTSD duration and ASD relationship?', back: 'PTSD: symptoms persist >1 MONTH after trauma.\nAcute Stress Disorder: 3 DAYS to 1 MONTH after trauma.\nIf ASD symptoms persist past 1 month, re-evaluate for PTSD.', tag: 'differential' },
    { front: 'PTSD specifiers in DSM-5?', back: '1. With DISSOCIATIVE symptoms (depersonalization or derealization)\n2. With DELAYED EXPRESSION — full criteria not met until ≥6 months after the event.', tag: 'specifier' },
    { front: 'What kinds of exposure DO and DO NOT qualify for PTSD Criterion A4?', back: 'A4 = REPEATED OR EXTREME exposure to aversive details (first responders, body recovery, child-abuse investigators).\nDOES NOT apply to exposure via electronic media, TV, movies, or pictures UNLESS work-related.', tag: 'pearl' }
  ],
  acute_stress: [
    { front: 'Acute Stress Disorder symptom count and duration?', back: 'Need ≥9 of 14 symptoms across 5 categories (intrusion, negative mood, dissociation, avoidance, arousal).\nDuration: 3 DAYS to 1 MONTH after trauma.', tag: 'pearl' },
    { front: 'Why does DSM-5 use a single 9/14 threshold for ASD instead of cluster-specific minimums?', back: 'Acute reactions are heterogeneous — different people manifest different combinations of symptoms early on. A single threshold across all 5 clusters captures clinically significant acute distress without forcing premature pattern-fit.', tag: 'pearl' }
  ],

  // --- PSYCHOTIC ---
  schizophrenia: [
    { front: 'Schizophrenia Criterion A — required count and "gateway" symptoms?', back: '≥2 of 5 symptoms for ≥1 month (active phase), AT LEAST ONE must be (1) DELUSIONS, (2) HALLUCINATIONS, or (3) DISORGANIZED SPEECH.\nThe other two: (4) grossly disorganized/catatonic behavior, (5) negative symptoms.', tag: 'pearl' },
    { front: 'Schizophrenia total duration requirement?', back: 'CONTINUOUS signs ≥6 months total. Must include ≥1 month of active-phase Criterion A symptoms; may include prodromal + residual periods (often with attenuated or only negative symptoms).', tag: 'pearl' },
    { front: 'Schizophrenia spectrum — duration-based differentials?', back: '• Brief Psychotic Disorder: ≥1 day, <1 month → full recovery\n• Schizophreniform Disorder: 1–6 months\n• Schizophrenia: ≥6 months\nAll require Criterion A-equivalent symptoms.', tag: 'differential' },
    { front: 'Positive vs negative symptoms in schizophrenia?', back: 'POSITIVE (added): delusions, hallucinations, disorganized speech, disorganized/catatonic behavior.\nNEGATIVE (subtracted): diminished emotional expression (affective flattening), avolition, alogia, anhedonia, asociality.', tag: 'pearl' }
  ],
  schizoaffective: [
    { front: 'Schizoaffective Disorder — two key criteria that define it?', back: 'B — Delusions or hallucinations for ≥2 WEEKS in the ABSENCE of a major mood episode (distinguishes from MDD/Bipolar with psychotic features).\nC — Mood episode symptoms present for MAJORITY of total illness duration (distinguishes from schizophrenia).', tag: 'pearl' },
    { front: 'Schizoaffective subtypes?', back: '• Bipolar type — at least one manic episode (depressive episodes may also occur)\n• Depressive type — only major depressive episodes', tag: 'specifier' }
  ],
  delusional: [
    { front: 'Delusional Disorder duration and functioning?', back: '≥1 month of delusion(s). Criterion A of schizophrenia has NEVER been met. Apart from delusion impact, functioning is NOT markedly impaired and behavior is not bizarre.', tag: 'pearl' },
    { front: 'Delusional Disorder subtypes (7)?', back: '1. EROTOMANIC — another person (often higher status) is in love with the patient\n2. GRANDIOSE — great talent, insight, or important discovery\n3. JEALOUS — partner is unfaithful\n4. PERSECUTORY — being conspired against (most common)\n5. SOMATIC — bodily function/sensation\n6. MIXED\n7. UNSPECIFIED', tag: 'specifier' }
  ],

  // --- PERSONALITY ---
  bpd: [
    { front: 'Mnemonic for BPD criteria (need 5/9)?', back: 'PRAISE (or DESPAIRER, AM SUICIDE...) — many versions exist. One useful version:\n• Abandonment (frantic efforts to avoid)\n• Unstable intense relationships (idealization/devaluation)\n• Identity disturbance\n• Impulsivity (≥2 self-damaging areas)\n• Suicidal/self-mutilating behavior\n• Affective instability (hours, rarely days)\n• Emptiness (chronic)\n• Anger (intense, inappropriate)\n• Paranoid ideation or dissociation (transient, stress-related)\nNeed ≥5 of 9.', tag: 'mnemonic' },
    { front: 'BPD vs Bipolar II — distinguishing features?', back: 'BPD mood shifts: triggered by interpersonal events, last HOURS (rarely days), with chronic emptiness/identity issues.\nBipolar II mood episodes: distinct sustained periods of hypomania or depression lasting DAYS-WEEKS, less reactive to environment.', tag: 'differential' }
  ],
  npd: [
    { front: 'NPD core triad?', back: 'GRANDIOSITY (in fantasy or behavior) + need for ADMIRATION + lack of EMPATHY.\nNeed ≥5 of 9 criteria, beginning by early adulthood, across multiple contexts.', tag: 'pearl' },
    { front: 'NPD vs Manic Episode?', back: 'Manic grandiosity is EPISODIC and tied to elevated mood/energy, often with sleep changes, pressured speech.\nNPD grandiosity is PERVASIVE and stable across the life course, not tied to mood episodes.', tag: 'differential' }
  ],
  aspd: [
    { front: 'ASPD age and conduct disorder rules?', back: 'Patient must be ≥18 years old.\nPattern of disregard for rights of others since age 15.\nEvidence of CONDUCT DISORDER with onset before age 15 is REQUIRED.', tag: 'pearl' },
    { front: 'ASPD threshold and key criteria?', back: '≥3 of 7 criteria: unlawful behavior, deceitfulness, impulsivity, irritability/aggressiveness, reckless disregard for safety, irresponsibility, lack of remorse.', tag: 'pearl' }
  ],
  paranoid_pd: [
    { front: 'Paranoid PD threshold and core feature?', back: '≥4 of 7 criteria. Core feature: PERVASIVE DISTRUST/SUSPICIOUSNESS — interpreting motives of others as malevolent. No frank psychosis.', tag: 'pearl' },
    { front: 'Paranoid PD vs Delusional Disorder (persecutory)?', back: 'Paranoid PD: trait-level, lifelong PATTERN of distrust; no fixed delusion.\nDelusional Disorder: encapsulated, fixed false belief ≥1 month; functioning otherwise preserved.', tag: 'differential' }
  ],
  schizoid_pd: [
    { front: 'Schizoid PD core features and threshold?', back: '≥4 of 7 criteria. Pervasive DETACHMENT from social relationships + RESTRICTED affect. Patient NEITHER DESIRES nor enjoys close relationships (ego-syntonic).', tag: 'pearl' },
    { front: 'Schizoid PD vs Avoidant PD?', back: 'Schizoid: does NOT want close relationships — solitude is preferred.\nAvoidant: WANTS relationships but avoids them out of fear of rejection/criticism.', tag: 'differential' }
  ],
  schizotypal_pd: [
    { front: 'Schizotypal PD threshold and core domain?', back: '≥5 of 9 criteria. Pervasive deficits in close relationships + COGNITIVE/PERCEPTUAL distortions + behavioral eccentricities. No frank psychosis.', tag: 'pearl' },
    { front: 'Why is Schizotypal PD "dual-classified" in DSM-5?', back: 'Listed both as a Personality Disorder AND as part of the Schizophrenia Spectrum and Other Psychotic Disorders chapter. Genetic and family-study evidence links it to schizophrenia.', tag: 'pearl' }
  ],
  histrionic_pd: [
    { front: 'Histrionic PD core features and threshold?', back: '≥5 of 8 criteria. Pervasive EXCESSIVE EMOTIONALITY + ATTENTION-SEEKING. Theatricality, seductive behavior, suggestibility, shallow rapidly-shifting affect.', tag: 'pearl' }
  ],
  avoidant_pd: [
    { front: 'Avoidant PD vs Social Anxiety Disorder?', back: 'Highly overlapping (some consider them on the same spectrum).\nAvoidant PD: PERVASIVE pattern of inadequacy/inferiority across LIFE, not just social situations.\nSAD: focused on fear of negative evaluation in specific social situations; performance-only specifier exists.', tag: 'differential' },
    { front: 'Avoidant PD threshold?', back: '≥4 of 7 criteria. Pervasive social inhibition + feelings of inadequacy + hypersensitivity to negative evaluation. Wants relationships but avoids out of fear.', tag: 'pearl' }
  ],
  dependent_pd: [
    { front: 'Dependent PD core feature and threshold?', back: '≥5 of 8 criteria. Pervasive, excessive NEED TO BE CARED FOR → submissive/clinging behavior + fears of separation.', tag: 'pearl' },
    { front: 'Dependent PD vs BPD?', back: 'Dependent: QUIET submissiveness, fear of being left to care for self, seeks new relationship urgently after one ends.\nBPD: FRANTIC efforts to avoid abandonment, with intense unstable relationships, impulsivity, identity disturbance.', tag: 'differential' }
  ],
  ocpd: [
    { front: 'OCPD core triad and threshold?', back: '≥4 of 8 criteria. Pervasive preoccupation with ORDERLINESS + PERFECTIONISM + mental/interpersonal CONTROL — at the expense of flexibility, openness, and efficiency.', tag: 'pearl' },
    { front: 'OCPD vs OCD — the essential distinction?', back: 'OCPD: EGO-SYNTONIC personality traits (rigidity, perfectionism); patient endorses these as correct. No true obsessions/compulsions.\nOCD: EGO-DYSTONIC intrusive obsessions + ritualized compulsions; patient finds them distressing.', tag: 'differential' }
  ],

  // --- NEURODEVELOPMENTAL ---
  adhd: [
    { front: 'ADHD symptom count thresholds?', back: 'Inattention: ≥6 of 9 for children, ≥5 of 9 for ages 17+.\nHyperactivity/Impulsivity: ≥6 of 9 for children, ≥5 of 9 for ages 17+.\nDuration: ≥6 months, present in ≥2 settings.', tag: 'pearl' },
    { front: 'ADHD age-of-onset requirement?', back: 'Several inattentive or hyperactive-impulsive symptoms must have been present BEFORE AGE 12 (changed from age 7 in DSM-IV).', tag: 'pearl' },
    { front: 'ADHD presentations (specifiers)?', back: '• Combined (both A1 and A2 met for past 6 months)\n• Predominantly inattentive\n• Predominantly hyperactive/impulsive\n• In partial remission\nSeverity: mild / moderate / severe.', tag: 'specifier' }
  ],
  asd: [
    { front: 'ASD Criterion A vs Criterion B requirements?', back: 'Criterion A — SOCIAL COMMUNICATION deficits: ALL 3 must be present (social-emotional reciprocity; nonverbal communication; relationships).\nCriterion B — RESTRICTED, REPETITIVE behaviors: ≥2 of 4 (stereotypies, insistence on sameness, restricted interests, sensory hyper/hyporeactivity).', tag: 'pearl' },
    { front: 'What DSM-5 diagnoses are now subsumed by ASD?', back: 'Autistic Disorder, Asperger\'s Syndrome, Childhood Disintegrative Disorder, and PDD-NOS were merged into a single ASD diagnosis in DSM-5.', tag: 'pearl' },
    { front: 'ASD severity levels?', back: 'Levels 1–3 rated separately for (a) social communication and (b) restricted/repetitive behaviors:\n• Level 1: "Requiring support"\n• Level 2: "Requiring substantial support"\n• Level 3: "Requiring very substantial support"', tag: 'specifier' }
  ],

  // --- EATING ---
  anorexia: [
    { front: 'Anorexia Nervosa three core criteria?', back: 'A — Restriction of energy intake → significantly LOW BODY WEIGHT (relative to age/sex/development/health).\nB — Intense FEAR of gaining weight, OR persistent behavior interfering with weight gain, even at low weight.\nC — Disturbed BODY IMAGE, undue influence of weight/shape on self-evaluation, OR persistent lack of recognition of seriousness.', tag: 'pearl' },
    { front: 'Anorexia subtypes?', back: '• RESTRICTING type: no binge-eating or purging in the last 3 months; weight loss via dieting, fasting, excessive exercise.\n• BINGE-EATING/PURGING type: recurrent binge/purge in last 3 months.', tag: 'specifier' },
    { front: 'Anorexia severity (adults, by BMI)?', back: '• Mild: BMI ≥17\n• Moderate: BMI 16–16.99\n• Severe: BMI 15–15.99\n• Extreme: BMI <15', tag: 'specifier' },
    { front: 'How does DSM-5 anorexia differ from DSM-IV?', back: 'AMENORRHEA criterion was REMOVED (excluded prepubertal patients, post-menopausal women, men).\nCriterion B may now be met by BEHAVIOR (e.g., excessive exercise) rather than verbalized fear.', tag: 'pearl' }
  ],
  bulimia: [
    { front: 'Bulimia binge/compensation frequency?', back: 'On AVERAGE ≥1 episode per week of BOTH binge eating AND compensatory behavior, for ≥3 MONTHS.', tag: 'pearl' },
    { front: 'Bulimia vs Anorexia binge-eating/purging type?', back: 'Anorexia B/P: patient is at SIGNIFICANTLY LOW BODY WEIGHT.\nBulimia: weight is usually NORMAL or overweight.\nIf criteria for both are met → ANOREXIA takes precedence.', tag: 'differential' },
    { front: 'Bulimia severity (episodes/week)?', back: '• Mild: 1–3 episodes/week\n• Moderate: 4–7\n• Severe: 8–13\n• Extreme: ≥14', tag: 'specifier' }
  ],
  bed: [
    { front: 'BED binge frequency?', back: '≥1 binge per week for ≥3 months. Marked distress regarding binge eating. NO recurrent compensatory behaviors.', tag: 'pearl' },
    { front: 'BED Criterion B — associated features (≥3 of 5)?', back: '1. Eating much more rapidly than normal\n2. Eating until uncomfortably full\n3. Eating large amounts when not hungry\n4. Eating alone due to embarrassment\n5. Feeling disgusted/depressed/guilty afterward', tag: 'pearl' },
    { front: 'BED vs Bulimia — single key distinction?', back: 'BED has NO recurrent compensatory behavior (no purging, fasting, excessive exercise to prevent weight gain). Bulimia requires the compensatory cycle.', tag: 'differential' }
  ]
};

// ============================================================
// MEDICATIONS
// ============================================================
// FDA-approved indications only (per DailyMed product labeling).
// Each entry is either { classes: [...] } with one or more drug classes,
// or { note: '...' } when no agent is FDA-approved for that disorder
// (and a brief honest explanation is more useful than an empty section).
// Sources: dailymed.nlm.nih.gov product labels.
const MEDICATIONS = {
  // ---- DEPRESSIVE ----
  mdd: { classes: [
    { name: 'SSRIs', drugs: [
      { generic: 'fluoxetine', brand: ['Prozac', 'Sarafem'] },
      { generic: 'sertraline', brand: ['Zoloft'] },
      { generic: 'paroxetine', brand: ['Paxil', 'Paxil CR', 'Pexeva'] },
      { generic: 'citalopram', brand: ['Celexa'] },
      { generic: 'escitalopram', brand: ['Lexapro'] }
    ]},
    { name: 'SNRIs', drugs: [
      { generic: 'venlafaxine', brand: ['Effexor', 'Effexor XR'] },
      { generic: 'desvenlafaxine', brand: ['Pristiq'] },
      { generic: 'duloxetine', brand: ['Cymbalta'] },
      { generic: 'levomilnacipran', brand: ['Fetzima'] }
    ]},
    { name: 'Atypical antidepressants', drugs: [
      { generic: 'bupropion', brand: ['Wellbutrin', 'Wellbutrin XL', 'Wellbutrin SR'] },
      { generic: 'mirtazapine', brand: ['Remeron'] },
      { generic: 'vilazodone', brand: ['Viibryd'] },
      { generic: 'vortioxetine', brand: ['Trintellix'] },
      { generic: 'trazodone', brand: ['Desyrel', 'Oleptro'] },
      { generic: 'nefazodone', brand: ['Serzone'] }
    ]},
    { name: 'Tricyclics (TCAs)', drugs: [
      { generic: 'amitriptyline', brand: ['Elavil'] },
      { generic: 'nortriptyline', brand: ['Pamelor'] },
      { generic: 'imipramine', brand: ['Tofranil'] },
      { generic: 'desipramine', brand: ['Norpramin'] },
      { generic: 'doxepin', brand: ['Sinequan'] },
      { generic: 'protriptyline', brand: ['Vivactil'] },
      { generic: 'trimipramine', brand: ['Surmontil'] }
    ]},
    { name: 'MAOIs', drugs: [
      { generic: 'phenelzine', brand: ['Nardil'] },
      { generic: 'tranylcypromine', brand: ['Parnate'] },
      { generic: 'isocarboxazid', brand: ['Marplan'] },
      { generic: 'selegiline transdermal', brand: ['Emsam'] }
    ]},
    { name: 'Atypical antipsychotic adjuncts', drugs: [
      { generic: 'aripiprazole', brand: ['Abilify'] },
      { generic: 'brexpiprazole', brand: ['Rexulti'] },
      { generic: 'quetiapine XR', brand: ['Seroquel XR'] },
      { generic: 'olanzapine + fluoxetine', brand: ['Symbyax'] }
    ]},
    { name: 'NMDA modulators (treatment-resistant)', drugs: [
      { generic: 'esketamine intranasal', brand: ['Spravato'] }
    ]}
  ]},
  pdd: {
    note: 'No agents are FDA-approved specifically for Persistent Depressive Disorder. In practice, SSRIs and SNRIs approved for MDD are used; fluoxetine has the strongest controlled-trial evidence.',
    classes: []
  },
  dmdd: {
    note: 'No medications are FDA-approved specifically for DMDD. First-line treatment is psychosocial (parent management training, CBT). Stimulants for comorbid ADHD; SSRIs or risperidone occasionally used off-label for severe irritability or aggression.',
    classes: []
  },

  // ---- BIPOLAR ----
  bipolar1: { classes: [
    { name: 'Lithium', drugs: [
      { generic: 'lithium carbonate', brand: ['Lithobid', 'Eskalith'] }
    ]},
    { name: 'Anticonvulsant mood stabilizers', drugs: [
      { generic: 'valproate / divalproex', brand: ['Depakote', 'Depakote ER', 'Depakene'] },
      { generic: 'carbamazepine ER', brand: ['Equetro', 'Tegretol XR'] },
      { generic: 'lamotrigine (maintenance)', brand: ['Lamictal'] }
    ]},
    { name: 'Atypical antipsychotics (acute mania / mixed)', drugs: [
      { generic: 'olanzapine', brand: ['Zyprexa'] },
      { generic: 'risperidone', brand: ['Risperdal', 'Risperdal Consta'] },
      { generic: 'quetiapine', brand: ['Seroquel', 'Seroquel XR'] },
      { generic: 'aripiprazole', brand: ['Abilify', 'Abilify Maintena'] },
      { generic: 'ziprasidone', brand: ['Geodon'] },
      { generic: 'asenapine', brand: ['Saphris'] },
      { generic: 'cariprazine', brand: ['Vraylar'] }
    ]},
    { name: 'For bipolar I depression', drugs: [
      { generic: 'quetiapine', brand: ['Seroquel', 'Seroquel XR'] },
      { generic: 'lurasidone', brand: ['Latuda'] },
      { generic: 'olanzapine + fluoxetine', brand: ['Symbyax'] },
      { generic: 'cariprazine', brand: ['Vraylar'] },
      { generic: 'lumateperone', brand: ['Caplyta'] }
    ]}
  ]},
  bipolar2: { classes: [
    { name: 'For bipolar II depression', drugs: [
      { generic: 'quetiapine', brand: ['Seroquel', 'Seroquel XR'] },
      { generic: 'lumateperone', brand: ['Caplyta'] }
    ]},
    { name: 'Maintenance / mood stabilizers', drugs: [
      { generic: 'lithium carbonate', brand: ['Lithobid', 'Eskalith'] },
      { generic: 'lamotrigine (maintenance)', brand: ['Lamictal'] }
    ]}
  ]},
  cyclothymia: {
    note: 'No medications are FDA-approved specifically for cyclothymic disorder. Mood stabilizers (lithium, lamotrigine, valproate) and second-generation antipsychotics used in bipolar I/II are applied off-label.',
    classes: []
  },

  // ---- ANXIETY ----
  gad: { classes: [
    { name: 'SSRIs', drugs: [
      { generic: 'paroxetine', brand: ['Paxil'] },
      { generic: 'escitalopram', brand: ['Lexapro'] }
    ]},
    { name: 'SNRIs', drugs: [
      { generic: 'venlafaxine ER', brand: ['Effexor XR'] },
      { generic: 'duloxetine', brand: ['Cymbalta'] }
    ]},
    { name: 'Azapirone', drugs: [
      { generic: 'buspirone', brand: ['Buspar'] }
    ]},
    { name: 'Benzodiazepines (short-term)', drugs: [
      { generic: 'alprazolam', brand: ['Xanax', 'Xanax XR'] },
      { generic: 'lorazepam', brand: ['Ativan'] },
      { generic: 'diazepam', brand: ['Valium'] },
      { generic: 'clonazepam', brand: ['Klonopin'] }
    ]},
    { name: 'Antihistamine', drugs: [
      { generic: 'hydroxyzine', brand: ['Vistaril', 'Atarax'] }
    ]}
  ]},
  panic: { classes: [
    { name: 'SSRIs', drugs: [
      { generic: 'fluoxetine', brand: ['Prozac'] },
      { generic: 'sertraline', brand: ['Zoloft'] },
      { generic: 'paroxetine', brand: ['Paxil', 'Paxil CR'] }
    ]},
    { name: 'SNRI', drugs: [
      { generic: 'venlafaxine ER', brand: ['Effexor XR'] }
    ]},
    { name: 'Benzodiazepines', drugs: [
      { generic: 'alprazolam', brand: ['Xanax', 'Xanax XR'] },
      { generic: 'clonazepam', brand: ['Klonopin'] }
    ]}
  ]},
  sad: { classes: [
    { name: 'SSRIs', drugs: [
      { generic: 'sertraline', brand: ['Zoloft'] },
      { generic: 'paroxetine', brand: ['Paxil', 'Paxil CR'] },
      { generic: 'fluvoxamine CR', brand: ['Luvox CR'] }
    ]},
    { name: 'SNRI', drugs: [
      { generic: 'venlafaxine ER', brand: ['Effexor XR'] }
    ]}
  ]},
  specific_phobia: {
    note: 'No medications are FDA-approved for specific phobia. Exposure therapy is first-line. Benzodiazepines or beta-blockers (propranolol) are occasionally used short-term for situational phobias (e.g., flying).',
    classes: []
  },
  agoraphobia: {
    note: 'No agents are FDA-approved specifically for agoraphobia. SSRIs and SNRIs approved for panic disorder (which commonly co-occurs) are typically used.',
    classes: []
  },

  // ---- OCD AND RELATED ----
  ocd_dx: { classes: [
    { name: 'SSRIs', drugs: [
      { generic: 'fluoxetine', brand: ['Prozac'] },
      { generic: 'sertraline', brand: ['Zoloft'] },
      { generic: 'paroxetine', brand: ['Paxil'] },
      { generic: 'fluvoxamine', brand: ['Luvox', 'Luvox CR'] }
    ]},
    { name: 'Tricyclic (gold-standard comparator)', drugs: [
      { generic: 'clomipramine', brand: ['Anafranil'] }
    ]}
  ]},
  bdd: {
    note: 'No medications are FDA-approved specifically for body dysmorphic disorder. SSRIs (especially fluoxetine) and clomipramine are first-line in practice, supported by OCD-equivalent trial evidence.',
    classes: []
  },
  hoarding: {
    note: 'No medications are FDA-approved for hoarding disorder. CBT with exposure and response prevention is first-line. SSRIs used off-label show modest benefit, particularly when comorbid depression or OCD is present.',
    classes: []
  },

  // ---- TRAUMA / STRESSOR-RELATED ----
  ptsd: { classes: [
    { name: 'SSRIs (FDA-approved for PTSD)', drugs: [
      { generic: 'sertraline', brand: ['Zoloft'] },
      { generic: 'paroxetine', brand: ['Paxil'] }
    ]}
  ]},
  acute_stress: {
    note: 'No medications are FDA-approved for Acute Stress Disorder. Short-term symptomatic treatment of hyperarousal or insomnia may be used; SSRIs are introduced if symptoms persist beyond 1 month and ASD transitions toward PTSD.',
    classes: []
  },

  // ---- PSYCHOTIC ----
  schizophrenia: { classes: [
    { name: 'First-generation (typical) antipsychotics', drugs: [
      { generic: 'haloperidol', brand: ['Haldol', 'Haldol Decanoate'] },
      { generic: 'chlorpromazine', brand: ['Thorazine'] },
      { generic: 'fluphenazine', brand: ['Prolixin', 'Prolixin Decanoate'] },
      { generic: 'perphenazine', brand: ['Trilafon'] },
      { generic: 'thiothixene', brand: ['Navane'] },
      { generic: 'loxapine', brand: ['Loxitane', 'Adasuve'] },
      { generic: 'trifluoperazine', brand: ['Stelazine'] }
    ]},
    { name: 'Second-generation (atypical) antipsychotics', drugs: [
      { generic: 'risperidone', brand: ['Risperdal', 'Risperdal Consta'] },
      { generic: 'paliperidone', brand: ['Invega', 'Invega Sustenna', 'Invega Trinza'] },
      { generic: 'olanzapine', brand: ['Zyprexa', 'Zyprexa Relprevv'] },
      { generic: 'quetiapine', brand: ['Seroquel', 'Seroquel XR'] },
      { generic: 'aripiprazole', brand: ['Abilify', 'Abilify Maintena', 'Aristada'] },
      { generic: 'ziprasidone', brand: ['Geodon'] },
      { generic: 'asenapine', brand: ['Saphris'] },
      { generic: 'lurasidone', brand: ['Latuda'] },
      { generic: 'iloperidone', brand: ['Fanapt'] },
      { generic: 'brexpiprazole', brand: ['Rexulti'] },
      { generic: 'cariprazine', brand: ['Vraylar'] },
      { generic: 'lumateperone', brand: ['Caplyta'] }
    ]},
    { name: 'For treatment-resistant schizophrenia', drugs: [
      { generic: 'clozapine', brand: ['Clozaril', 'Versacloz', 'FazaClo'] }
    ]}
  ]},
  schizoaffective: { classes: [
    { name: 'FDA-approved for schizoaffective disorder', drugs: [
      { generic: 'paliperidone', brand: ['Invega', 'Invega Sustenna'] }
    ]},
    { name: 'Other antipsychotics commonly used', drugs: [
      { generic: 'risperidone', brand: ['Risperdal'] },
      { generic: 'olanzapine', brand: ['Zyprexa'] },
      { generic: 'aripiprazole', brand: ['Abilify'] },
      { generic: 'quetiapine', brand: ['Seroquel', 'Seroquel XR'] }
    ]}
  ]},
  delusional: {
    note: 'No medications are FDA-approved specifically for delusional disorder. Second-generation antipsychotics (risperidone, olanzapine) are used off-label with modest evidence; the somatic subtype may respond preferentially to pimozide.',
    classes: []
  },

  // ---- PERSONALITY DISORDERS ----
  bpd: {
    note: 'No medications are FDA-approved for borderline personality disorder. Psychotherapy is first-line (DBT, mentalization-based, transference-focused). SSRIs, mood stabilizers, and second-generation antipsychotics are used symptomatically off-label.',
    classes: []
  },
  npd: { note: 'No medications are FDA-approved for narcissistic personality disorder. Treatment is psychotherapy; pharmacotherapy targets comorbid mood or anxiety disorders only.', classes: [] },
  aspd: { note: 'No medications are FDA-approved for antisocial personality disorder. Treatment is psychosocial; pharmacotherapy targets comorbid conditions only.', classes: [] },
  paranoid_pd: { note: 'No medications are FDA-approved for paranoid personality disorder. Supportive psychotherapy; low-dose antipsychotics off-label for transient paranoid intensification.', classes: [] },
  schizoid_pd: { note: 'No medications are FDA-approved for schizoid personality disorder. Supportive psychotherapy is primary.', classes: [] },
  schizotypal_pd: { note: 'No medications are FDA-approved for schizotypal personality disorder. Low-dose second-generation antipsychotics used off-label; SSRIs for anxious/depressive features.', classes: [] },
  histrionic_pd: { note: 'No medications are FDA-approved for histrionic personality disorder. Psychotherapy is primary.', classes: [] },
  avoidant_pd: { note: 'No medications are FDA-approved for avoidant personality disorder. SSRIs and SNRIs approved for social anxiety disorder are used off-label for the overlapping symptom profile.', classes: [] },
  dependent_pd: { note: 'No medications are FDA-approved for dependent personality disorder. Psychotherapy is primary; pharmacotherapy targets comorbid anxiety or depression.', classes: [] },
  ocpd: { note: 'No medications are FDA-approved for obsessive-compulsive personality disorder (distinct from OCD). Psychotherapy is primary.', classes: [] },

  // ---- NEURODEVELOPMENTAL ----
  adhd: { classes: [
    { name: 'Methylphenidate-class stimulants', drugs: [
      { generic: 'methylphenidate IR', brand: ['Ritalin', 'Methylin'] },
      { generic: 'methylphenidate ER / LA / OROS', brand: ['Concerta', 'Ritalin LA', 'Metadate CD', 'Quillivant XR', 'Aptensio XR'] },
      { generic: 'methylphenidate patch', brand: ['Daytrana'] },
      { generic: 'dexmethylphenidate', brand: ['Focalin', 'Focalin XR'] },
      { generic: 'serdexmethylphenidate + dexmethylphenidate', brand: ['Azstarys'] }
    ]},
    { name: 'Amphetamine-class stimulants', drugs: [
      { generic: 'mixed amphetamine salts', brand: ['Adderall', 'Adderall XR', 'Mydayis'] },
      { generic: 'dextroamphetamine', brand: ['Dexedrine', 'ProCentra', 'Zenzedi'] },
      { generic: 'lisdexamfetamine', brand: ['Vyvanse'] }
    ]},
    { name: 'Non-stimulants', drugs: [
      { generic: 'atomoxetine', brand: ['Strattera'] },
      { generic: 'viloxazine ER', brand: ['Qelbree'] },
      { generic: 'guanfacine ER', brand: ['Intuniv'] },
      { generic: 'clonidine ER', brand: ['Kapvay'] }
    ]}
  ]},
  asd: { classes: [
    { name: 'For irritability associated with autistic disorder (FDA-approved)', drugs: [
      { generic: 'risperidone', brand: ['Risperdal'] },
      { generic: 'aripiprazole', brand: ['Abilify'] }
    ]}
  ]},

  // ---- EATING DISORDERS ----
  anorexia: {
    note: 'No medications are FDA-approved for anorexia nervosa. Nutritional rehabilitation and psychotherapy (CBT-E, family-based therapy for adolescents) are primary. Olanzapine has modest evidence for weight gain off-label.',
    classes: []
  },
  bulimia: { classes: [
    { name: 'SSRI (FDA-approved for bulimia nervosa)', drugs: [
      { generic: 'fluoxetine', brand: ['Prozac'] }
    ]}
  ]},
  bed: { classes: [
    { name: 'FDA-approved for moderate-to-severe BED', drugs: [
      { generic: 'lisdexamfetamine', brand: ['Vyvanse'] }
    ]}
  ]}
};

// ============================================================
// DATA ACCESSORS
// ============================================================
function allDisorders() {
  return DSM5_DATA.chapters.flatMap(c => c.disorders.map(d => ({ ...d, chapterName: c.name, chapterId: c.id, chapterColor: c.color })));
}

function findDisorder(id) {
  return allDisorders().find(d => d.id === id);
}

function findChapterForDisorder(id) {
  return DSM5_DATA.chapters.find(c => c.disorders.some(d => d.id === id));
}
