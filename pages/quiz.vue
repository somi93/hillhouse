<template>
  <v-container :class="$device.isMobile ? 'pa-2' : 'pa-4 mt-10'">
    <v-row
      justify="center"
      :class="$device.isMobile ? 'ma-0' : 'mt-10'"
      :style="$device.isMobile ? 'padding-top: 70px' : ''"
    >
      <v-col
        cols="12"
        :md="$device.isTablet ? 12 : 10"
        :lg="$device.isDesktop ? 8 : 12"
        :class="$device.isMobile ? 'pa-1' : 'pa-3'"
      >
        <!-- Main Menu -->
        <v-card
          v-if="!quizStarted && !quizCompleted && !viewingQuizDetails"
          :class="$device.isMobile ? 'pa-3' : 'pa-6'"
        >
          <v-card-title
            :class="[
              $device.isMobile ? 'text-h6 mb-2' : 'text-h4 mb-4',
              'text-center px-2',
            ]"
          >
            Изаберите тип квиза
          </v-card-title>

          <!-- Show continue option if there's saved state -->
          <v-alert
            v-if="hasSavedState"
            type="info"
            :class="$device.isMobile ? 'mb-3' : 'mb-4'"
          >
            <div
              :class="
                $device.isMobile
                  ? 'd-flex flex-column align-center ga-2'
                  : 'd-flex justify-space-between align-center'
              "
            >
              <span
                :class="$device.isMobile ? 'text-body-2 text-center mb-2' : ''"
              >
                Имате започет квиз. Желите ли да наставите?
              </span>
              <v-btn
                @click="loadAndContinueQuiz"
                color="white"
                variant="outlined"
                :size="$device.isMobile ? 'small' : 'default'"
              >
                Настави
              </v-btn>
            </div>
          </v-alert>

          <!-- Quiz History Statistics -->
          <v-card
            v-if="quizHistory.length > 0"
            :class="$device.isMobile ? 'mb-3' : 'mb-4'"
            outlined
          >
            <v-card-title
              :class="$device.isMobile ? 'text-body-1 pa-3' : 'text-h6'"
            >
              <div
                :class="
                  $device.isMobile
                    ? 'd-flex flex-column align-center ga-2'
                    : 'd-flex justify-space-between align-center w-100'
                "
              >
                <span>Историја квизова</span>
                <v-btn
                  @click="showClearHistoryDialog = true"
                  :size="$device.isMobile ? 'x-small' : 'small'"
                  color="error"
                  variant="outlined"
                  :class="$device.isMobile ? 'mt-1' : ''"
                >
                  {{ $device.isMobile ? "Обриши" : "Обриши историју" }}
                </v-btn>
              </div>
            </v-card-title>
            <v-card-text :class="$device.isMobile ? 'pa-2' : ''">
              <v-row>
                <v-col
                  :cols="$device.isMobile ? 12 : 12"
                  :md="$device.isMobile ? 12 : 6"
                >
                  <div
                    :class="
                      $device.isMobile
                        ? 'text-body-2 mb-1'
                        : 'text-subtitle-1 mb-2'
                    "
                  >
                    Укупна статистика:
                  </div>
                  <div :class="$device.isMobile ? 'text-body-2' : ''">
                    Укупно квизова: {{ quizHistory.length }}
                  </div>
                  <div :class="$device.isMobile ? 'text-body-2' : ''">
                    Просечан резултат: {{ averageScore.toFixed(1) }}%
                  </div>
                  <div :class="$device.isMobile ? 'text-body-2' : ''">
                    Најбољи резултат: {{ bestScore }}%
                  </div>
                </v-col>
                <v-col
                  :cols="$device.isMobile ? 12 : 12"
                  :md="$device.isMobile ? 12 : 6"
                  :class="$device.isMobile ? 'pt-2' : ''"
                >
                  <div
                    :class="
                      $device.isMobile
                        ? 'text-body-2 mb-1'
                        : 'text-subtitle-1 mb-2'
                    "
                  >
                    По типу квиза:
                  </div>
                  <div
                    v-for="(stats, type) in quizTypeStats"
                    :key="type"
                    :class="$device.isMobile ? 'text-body-2' : ''"
                  >
                    {{ getQuizTypeName(type) }}: {{ stats.count }} ({{
                      stats.avgScore.toFixed(1)
                    }}% просек)
                  </div>
                </v-col>
              </v-row>

              <v-expansion-panels
                :class="$device.isMobile ? 'mt-2' : 'mt-4'"
                variant="accordion"
              >
                <v-expansion-panel>
                  <v-expansion-panel-title
                    :class="$device.isMobile ? 'text-body-2 pa-2' : ''"
                  >
                    Последње завршене квизове ({{
                      Math.min(5, quizHistory.length)
                    }})
                  </v-expansion-panel-title>
                  <v-expansion-panel-text
                    :class="$device.isMobile ? 'pa-1' : ''"
                  >
                    <div
                      v-for="(quiz, index) in recentQuizzes"
                      :key="index"
                      :class="[
                        $device.isMobile ? 'mb-2 pa-2' : 'mb-2 pa-2',
                        'border rounded',
                      ]"
                    >
                      <div
                        :class="
                          $device.isMobile
                            ? 'd-flex flex-column ga-2'
                            : 'd-flex justify-space-between align-center'
                        "
                      >
                        <div :class="$device.isMobile ? 'text-center' : ''">
                          <strong
                            :class="$device.isMobile ? 'text-body-2' : ''"
                            >{{ getQuizTypeName(quiz.type) }}</strong
                          >
                          <div
                            :class="
                              $device.isMobile ? 'text-caption' : 'text-caption'
                            "
                          >
                            {{ formatDate(quiz.completedAt) }}
                          </div>
                        </div>
                        <div
                          :class="
                            $device.isMobile ? 'text-center' : 'text-right'
                          "
                        >
                          <div
                            :class="[
                              $device.isMobile ? 'text-body-1' : 'text-h6',
                              getScoreColor(quiz.percentage),
                            ]"
                          >
                            {{ quiz.score }}/{{ quiz.totalQuestions }} ({{
                              quiz.percentage
                            }}%)
                          </div>
                          <div class="text-caption">
                            {{ formatDuration(quiz.duration) }}
                          </div>
                        </div>
                        <div
                          :class="
                            $device.isMobile ? 'align-self-center' : 'ml-2'
                          "
                        >
                          <v-btn
                            @click="viewQuizDetails(quiz)"
                            :size="$device.isMobile ? 'x-small' : 'small'"
                            variant="outlined"
                            color="primary"
                          >
                            Детаљи
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>

          <v-card-text :class="$device.isMobile ? 'pa-2' : ''">
            <v-row :class="$device.isMobile ? 'ma-0' : ''">
              <v-col
                v-for="(option, index) in quizOptions"
                :key="index"
                cols="12"
                :md="$device.isMobile ? 12 : 4"
                :class="$device.isMobile ? 'pa-1 mb-2' : 'mb-4'"
              >
                <v-card
                  :class="[
                    'quiz-option-card text-center',
                    $device.isMobile ? 'pa-3' : 'pa-4',
                  ]"
                  hover
                  @click="startQuiz(option.type, option.count, option.shuffle)"
                >
                  <v-icon
                    :size="$device.isMobile ? 32 : 48"
                    :color="option.color"
                    :class="$device.isMobile ? 'mb-2' : 'mb-3'"
                  >
                    {{ option.icon }}
                  </v-icon>
                  <h4 :class="$device.isMobile ? 'text-body-1 mb-1' : 'mb-2'">
                    {{ option.title }}
                  </h4>
                  <p :class="$device.isMobile ? 'text-caption' : 'text-body-2'">
                    {{ option.description }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Quiz Details View -->
        <v-card
          v-if="viewingQuizDetails"
          :class="$device.isMobile ? 'pa-3' : 'pa-6'"
        >
          <v-card-title
            :class="[
              $device.isMobile ? 'text-h6 mb-2' : 'text-h4 mb-4',
              'text-center px-2',
            ]"
          >
            {{ getQuizTypeName(selectedQuizDetails.type) }} - Детаљи
          </v-card-title>

          <v-card-text :class="$device.isMobile ? 'pa-2' : ''">
            <div
              :class="[
                $device.isMobile ? 'text-center mb-4' : 'text-center mb-6',
              ]"
            >
              <div :class="$device.isMobile ? 'text-h6 mb-2' : 'text-h5 mb-4'">
                Резултат: {{ selectedQuizDetails.score }} од
                {{ selectedQuizDetails.totalQuestions }}
              </div>
              <div
                :class="[
                  $device.isMobile ? 'text-body-1 mb-2' : 'text-h6 mb-4',
                  getScoreColor(selectedQuizDetails.percentage),
                ]"
              >
                Проценат: {{ selectedQuizDetails.percentage }}%
              </div>
              <div
                :class="[
                  $device.isMobile ? 'text-body-2 mb-2' : 'text-body-2 mb-4',
                ]"
              >
                Време: {{ formatDuration(selectedQuizDetails.duration) }}
              </div>
              <div :class="$device.isMobile ? 'text-body-2' : 'text-body-2'">
                Завршено: {{ formatDate(selectedQuizDetails.completedAt) }}
              </div>
            </div>

            <!-- Questions overview for all quiz types -->
            <div
              v-if="selectedQuizDetails.questionsData"
              :class="$device.isMobile ? 'mt-4' : 'mt-6'"
            >
              <h4 :class="$device.isMobile ? 'text-body-1 mb-2' : 'mb-4'">
                Преглед одговора:
              </h4>
              <v-card
                v-for="(question, index) in selectedQuizDetails.questionsData"
                :key="question.id"
                :class="[
                  $device.isMobile ? 'mb-3 pa-3' : 'mb-4 pa-4',
                  getHistoryQuestionResultClass(question),
                ]"
              >
                <div
                  :class="[
                    $device.isMobile
                      ? 'font-weight-bold mb-2 text-body-2'
                      : 'font-weight-bold mb-2',
                  ]"
                >
                  {{ index + 1 }}. {{ question.question }}
                </div>

                <div :class="$device.isMobile ? 'mb-2 text-body-2' : 'mb-2'">
                  <span class="font-weight-medium">Ваш одговор: </span>
                  <span :class="getHistoryUserAnswerClass(question)">
                    {{ getHistoryUserAnswerText(question) }}
                  </span>
                </div>

                <div
                  v-if="!isHistoryUserAnswerCorrect(question)"
                  :class="$device.isMobile ? 'text-body-2' : ''"
                >
                  <span class="font-weight-medium">Тачан одговор: </span>
                  <span class="correct-text">
                    {{ getHistoryCorrectAnswerText(question) }}
                  </span>
                </div>
              </v-card>
            </div>

            <div
              v-else
              :class="[$device.isMobile ? 'mt-4' : 'mt-6', 'text-center']"
            >
              <p :class="$device.isMobile ? 'text-body-2' : 'text-body-1'">
                Детаљни подаци о питањима нису доступни за овај квиз.
              </p>
            </div>

            <div
              :class="[
                $device.isMobile ? 'text-center mt-4' : 'text-center mt-6',
              ]"
            >
              <v-btn
                @click="backToMenu"
                variant="outlined"
                :size="$device.isMobile ? 'small' : 'default'"
              >
                {{ $device.isMobile ? "Назад" : "Назад на мени" }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>

        <!-- Quiz Questions -->
        <v-card
          v-if="quizStarted && !quizCompleted"
          :class="$device.isMobile ? 'pa-3' : 'pa-6'"
        >
          <v-card-title
            :class="[$device.isMobile ? 'text-h6 mb-3 px-2' : 'text-h4 mb-4']"
          >
            Питање {{ currentQuestionIndex + 1 }} од
            {{ activeQuestions.length }}
          </v-card-title>

          <v-progress-linear
            :model-value="(currentQuestionIndex / activeQuestions.length) * 100"
            color="primary"
            :height="$device.isMobile ? 6 : 8"
            :class="$device.isMobile ? 'mb-4' : 'mb-6'"
          ></v-progress-linear>

          <v-card-text :class="$device.isMobile ? 'px-2' : ''">
            <h3
              :class="[
                $device.isMobile ? 'text-body-1 mb-3' : 'mb-4',
                'font-weight-bold',
              ]"
            >
              {{ currentQuestion.question }}
            </h3>

            <v-radio-group
              v-model="selectedAnswer"
              :class="$device.isMobile ? 'mt-2' : 'mt-4'"
              :disabled="showFeedback"
            >
              <v-radio
                v-for="option in currentQuestion.options"
                :key="option.id"
                :label="option.text"
                :value="option.id"
                :class="[
                  $device.isMobile ? 'mb-1' : 'mb-2',
                  getOptionClass(option),
                ]"
              ></v-radio>
            </v-radio-group>

            <v-alert
              v-if="showFeedback && !isPracticeTest"
              :type="isAnswerCorrect ? 'success' : 'error'"
              :class="$device.isMobile ? 'mt-3' : 'mt-4'"
              :density="$device.isMobile ? 'compact' : 'default'"
            >
              {{ isAnswerCorrect ? "Тачан одговор!" : "Нетачан одговор!" }}
            </v-alert>
          </v-card-text>

          <v-card-actions
            :class="$device.isMobile ? 'px-2 pb-3 flex-wrap ga-1' : 'px-6 pb-6'"
          >
            <v-btn
              @click="goToMenu"
              variant="outlined"
              color="secondary"
              :size="$device.isMobile ? 'small' : 'default'"
            >
              <v-icon v-if="$device.isMobile" :icon="mdiMenu"></v-icon>
              <span v-else>Назад на мени</span>
            </v-btn>
            <v-btn
              v-if="currentQuestionIndex > 0 && !showFeedback"
              @click="previousQuestion"
              variant="outlined"
              :size="$device.isMobile ? 'small' : 'default'"
            >
              <v-icon v-if="$device.isMobile" :icon="mdiChevronLeft"></v-icon>
              <span v-else>Претходно</span>
            </v-btn>

            <v-spacer v-if="!$device.isMobile"></v-spacer>

            <v-btn
              v-if="!showFeedback || isPracticeTest"
              @click="handleAnswerSubmit"
              :disabled="!selectedAnswer"
              color="primary"
              :variant="$device.isMobile ? 'outlined' : 'contained'"
              :size="$device.isMobile ? 'small' : 'default'"
              :class="$device.isMobile ? 'flex-grow-1' : ''"
            >
              <span>{{ getSubmitButtonText() }}</span>
            </v-btn>
            <v-btn
              v-if="showFeedback && !isPracticeTest"
              @click="nextQuestion"
              color="primary"
              :size="$device.isMobile ? 'small' : 'default'"
              :class="$device.isMobile ? 'flex-grow-1' : ''"
            >
              {{
                currentQuestionIndex === activeQuestions.length - 1
                  ? "Заврши"
                  : "Следеће"
              }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Quiz Results -->
        <v-card
          v-if="quizCompleted"
          :class="$device.isMobile ? 'pa-3' : 'pa-6'"
        >
          <v-card-title
            :class="[
              $device.isMobile ? 'text-h6 mb-3' : 'text-h4 mb-4',
              'text-center',
            ]"
          >
            Квиз завршен!
          </v-card-title>

          <v-card-text>
            <div
              :class="
                $device.isMobile ? 'text-center mb-4' : 'text-center mb-6'
              "
            >
              <div :class="$device.isMobile ? 'text-h6 mb-2' : 'text-h5 mb-4'">
                Ваш резултат: {{ correctAnswers }} од
                {{ activeQuestions.length }}
              </div>
              <div
                :class="[
                  $device.isMobile ? 'text-body-1 mb-2' : 'text-h6 mb-4',
                  getScoreColor(currentQuizPercentage),
                ]"
              >
                Проценат: {{ currentQuizPercentage }}%
              </div>
              <div
                :class="
                  $device.isMobile ? 'text-body-2 mb-2' : 'text-body-2 mb-4'
                "
              >
                Време: {{ formatDuration(quizDuration) }}
              </div>
              <div
                v-if="quizHistory.length > 0"
                :class="$device.isMobile ? 'text-body-2' : 'text-body-2'"
              >
                {{ getPerformanceMessage() }}
              </div>
            </div>

            <!-- Results overview for practice test -->
            <div
              v-if="isPracticeTest"
              :class="$device.isMobile ? 'mt-4' : 'mt-6'"
            >
              <h4 :class="$device.isMobile ? 'text-body-1 mb-2' : 'mb-4'">
                Преглед одговора:
              </h4>
              <v-card
                v-for="(question, index) in activeQuestions"
                :key="question.id"
                :class="[
                  $device.isMobile ? 'mb-3 pa-3' : 'mb-4 pa-4',
                  getQuestionResultClass(question),
                ]"
              >
                <div
                  :class="[
                    $device.isMobile
                      ? 'font-weight-bold mb-2 text-body-2'
                      : 'font-weight-bold mb-2',
                  ]"
                >
                  {{ index + 1 }}. {{ question.question }}
                </div>

                <div :class="$device.isMobile ? 'mb-2 text-body-2' : 'mb-2'">
                  <span class="font-weight-medium">Ваш одговор: </span>
                  <span :class="getUserAnswerClass(question)">
                    {{ getUserAnswerText(question) }}
                  </span>
                </div>

                <div
                  v-if="!isUserAnswerCorrect(question)"
                  :class="$device.isMobile ? 'text-body-2' : ''"
                >
                  <span class="font-weight-medium">Тачан одговор: </span>
                  <span class="correct-text">
                    {{ getCorrectAnswerText(question) }}
                  </span>
                </div>
              </v-card>
            </div>

            <div
              :class="
                $device.isMobile
                  ? 'text-center mt-4 d-flex flex-column ga-2'
                  : 'text-center mt-6'
              "
            >
              <v-btn
                @click="restartQuiz"
                color="primary"
                :class="$device.isMobile ? 'w-100' : 'mr-2'"
                :size="$device.isMobile ? 'default' : 'default'"
              >
                Понови квиз
              </v-btn>
              <v-btn
                @click="goToMenu"
                variant="outlined"
                :class="$device.isMobile ? 'w-100' : ''"
                :size="$device.isMobile ? 'default' : 'default'"
              >
                {{ $device.isMobile ? "Назад" : "Назад на мени" }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>

        <!-- Confirmation Dialog for Clearing History -->
        <v-dialog
          v-model="showClearHistoryDialog"
          :max-width="$device.isMobile ? '320px' : '500px'"
          :fullscreen="$device.isMobile && $device.isMobileOrTablet"
        >
          <v-card>
            <v-card-title
              :class="$device.isMobile ? 'text-body-1 pa-3' : 'text-h5'"
            >
              Потврда брисања историје
            </v-card-title>
            <v-card-text :class="$device.isMobile ? 'pa-3 text-body-2' : ''">
              Да ли сте сигурни да желите да обришете комплетну историју
              квизова?
              <br /><br />
              <strong>Ова акција се не може опозвати!</strong>
            </v-card-text>
            <v-card-actions
              :class="$device.isMobile ? 'pa-3 d-flex flex-column ga-2' : ''"
            >
              <v-spacer v-if="!$device.isMobile"></v-spacer>
              <v-btn
                color="grey"
                variant="outlined"
                @click="showClearHistoryDialog = false"
                :size="$device.isMobile ? 'default' : 'default'"
                :class="$device.isMobile ? 'w-100' : ''"
              >
                Откажи
              </v-btn>
              <v-btn
                color="error"
                variant="elevated"
                @click="confirmClearHistory"
                :size="$device.isMobile ? 'default' : 'default'"
                :class="$device.isMobile ? 'w-100' : ''"
              >
                Обриши
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { questions } from "@/models/quiz.js";
import {
  mdiSchool,
  mdiShuffleVariant,
  mdiFormatListNumbered,
  mdiMenu,
  mdiChevronLeft,
  mdiChevronRight,
} from "@mdi/js";
const { isMobile } = useDevice();
const quizStarted = ref(false);
const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const userAnswers = ref({});
const quizCompleted = ref(false);
const showFeedback = ref(false);
const activeQuestions = ref([]);
const isPracticeTest = ref(false);
const quizStartTime = ref(null);
const quizHistory = ref([]);
const currentQuizType = ref("");
const savedStateExists = ref(false);
const viewingQuizDetails = ref(false);
const selectedQuizDetails = ref(null);
const showClearHistoryDialog = ref(false); // Reactive ref for dialog

// localStorage keys
const STORAGE_KEY = "hillhouse_quiz_state";
const HISTORY_KEY = "hillhouse_quiz_history";

// Computed properties
const hasSavedState = computed(() => {
  return savedStateExists.value;
});

const currentQuestion = computed(
  () => activeQuestions.value[currentQuestionIndex.value]
);

const isAnswerCorrect = computed(() => {
  if (!selectedAnswer.value) return false;
  const correctOption = currentQuestion.value.options.find(
    (option) => option.isCorrect
  );
  return selectedAnswer.value === correctOption.id;
});

const correctAnswers = computed(() => {
  let count = 0;
  for (let i = 0; i < activeQuestions.value.length; i++) {
    const question = activeQuestions.value[i];
    const userAnswer = userAnswers.value[question.id];
    const correctOption = question.options.find((option) => option.isCorrect);
    if (userAnswer === correctOption.id) {
      count++;
    }
  }
  return count;
});

const currentQuizPercentage = computed(() =>
  Math.round((correctAnswers.value / activeQuestions.value.length) * 100)
);

const quizDuration = computed(() => {
  if (!quizStartTime.value) return 0;
  return Date.now() - quizStartTime.value;
});

const averageScore = computed(() => {
  if (quizHistory.value.length === 0) return 0;
  const total = quizHistory.value.reduce(
    (sum, quiz) => sum + quiz.percentage,
    0
  );
  return total / quizHistory.value.length;
});

const bestScore = computed(() => {
  if (quizHistory.value.length === 0) return 0;
  return Math.max(...quizHistory.value.map((quiz) => quiz.percentage));
});

const quizTypeStats = computed(() => {
  const stats = {};
  quizHistory.value.forEach((quiz) => {
    if (!stats[quiz.type]) {
      stats[quiz.type] = { count: 0, totalScore: 0 };
    }
    stats[quiz.type].count++;
    stats[quiz.type].totalScore += quiz.percentage;
  });

  Object.keys(stats).forEach((type) => {
    stats[type].avgScore = stats[type].totalScore / stats[type].count;
  });

  return stats;
});

const recentQuizzes = computed(() => {
  return [...quizHistory.value]
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))
    .slice(0, 5);
});

// Helper functions
const getQuizTypeName = (type) => {
  const names = {
    practice: "Пробни тест",
    mixed: "Измешана питања",
    ordered: "Питања у редоследу",
  };
  return names[type] || type;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return (
    date.toLocaleDateString("sr-RS") +
    " " +
    date.toLocaleTimeString("sr-RS", { hour: "2-digit", minute: "2-digit" })
  );
};

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const getScoreColor = (percentage) => {
  if (percentage >= 80) return "text-success";
  if (percentage >= 60) return "text-warning";
  return "text-error";
};

const getPerformanceMessage = () => {
  const currentScore = currentQuizPercentage.value;
  const avgScore = averageScore.value;
  const bestScoreValue = bestScore.value;

  if (currentScore === bestScoreValue) {
    return "Нови најбољи резултат! 🎉";
  } else if (currentScore > avgScore) {
    return `Изнад просека за ${(currentScore - avgScore).toFixed(1)}%! 👍`;
  } else if (currentScore < avgScore) {
    return `Испод просека за ${(avgScore - currentScore).toFixed(
      1
    )}%. Вежбајте више! 📚`;
  } else {
    return "Резултат на нивоу вашег просека.";
  }
};

// State management functions
const checkForSavedState = () => {
  if (process.client) {
    const saved = localStorage.getItem(STORAGE_KEY);
    console.log("Checking for saved state:", saved ? "EXISTS" : "NOT EXISTS");
    savedStateExists.value = !!saved;
    return !!saved;
  }
  return false;
};

const clearQuizState = () => {
  if (process.client) {
    console.log("Clearing quiz state from localStorage");
    localStorage.removeItem(STORAGE_KEY);
    savedStateExists.value = false;
    console.log("Quiz state cleared, savedStateExists set to false");
  }
};

const saveQuizState = () => {
  if (!process.client || !quizStarted.value) return;

  const quizState = {
    quizStarted: quizStarted.value,
    currentQuestionIndex: currentQuestionIndex.value,
    selectedAnswer: selectedAnswer.value,
    userAnswers: userAnswers.value,
    quizCompleted: quizCompleted.value,
    showFeedback: showFeedback.value,
    activeQuestions: activeQuestions.value,
    isPracticeTest: isPracticeTest.value,
    quizStartTime: quizStartTime.value,
    currentQuizType: currentQuizType.value,
    timestamp: Date.now(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
  savedStateExists.value = true;
  console.log(
    "saved state exists inside saveQuizState:",
    savedStateExists.value
  );
};

const loadQuizState = () => {
  if (!process.client) return false;

  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return false;

    const state = JSON.parse(savedState);

    // Check if saved state is not too old (24 hours)
    const maxAge = 24 * 60 * 60 * 1000;
    if (Date.now() - state.timestamp > maxAge) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }

    // Restore state
    quizStarted.value = state.quizStarted;
    currentQuestionIndex.value = state.currentQuestionIndex;
    selectedAnswer.value = state.selectedAnswer;
    userAnswers.value = state.userAnswers || {};
    quizCompleted.value = state.quizCompleted;
    showFeedback.value = state.showFeedback;
    activeQuestions.value = state.activeQuestions || [];
    isPracticeTest.value = state.isPracticeTest;
    quizStartTime.value = state.quizStartTime || Date.now();
    currentQuizType.value = state.currentQuizType || "";

    return true;
  } catch (error) {
    console.error("Error loading quiz state:", error);
    if (process.client) {
      localStorage.removeItem(STORAGE_KEY);
    }
    return false;
  }
};

// Quiz history functions
const loadQuizHistory = () => {
  if (!process.client) return;

  try {
    const savedHistory = localStorage.getItem(HISTORY_KEY);
    if (savedHistory) {
      quizHistory.value = JSON.parse(savedHistory);
    }
  } catch (error) {
    console.error("Error loading quiz history:", error);
    quizHistory.value = [];
  }
};

const saveQuizHistory = () => {
  if (!process.client) return;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(quizHistory.value));
};

const saveQuizResult = () => {
  const quizResult = {
    type: currentQuizType.value,
    score: correctAnswers.value,
    totalQuestions: activeQuestions.value.length,
    percentage: currentQuizPercentage.value,
    duration: quizDuration.value,
    completedAt: new Date().toISOString(),
    isPracticeTest: isPracticeTest.value,
    questionsData: activeQuestions.value.map((question) => ({
      id: question.id,
      question: question.question,
      options: question.options,
      userAnswer: userAnswers.value[question.id] || null,
    })),
  };

  quizHistory.value.push(quizResult);

  if (quizHistory.value.length > 50) {
    quizHistory.value = quizHistory.value.slice(-50);
  }

  saveQuizHistory();
};

const clearHistory = () => {
  quizHistory.value = [];
  saveQuizHistory();
};

const confirmClearHistory = () => {
  clearHistory();
  showClearHistoryDialog.value = false;
};

// Quiz details functions
const viewQuizDetails = (quiz) => {
  selectedQuizDetails.value = quiz;
  viewingQuizDetails.value = true;
};

const backToMenu = () => {
  viewingQuizDetails.value = false;
  selectedQuizDetails.value = null;
};

// Quiz flow functions
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const startQuiz = (type, count, shuffle) => {
  clearQuizState();

  let selectedQuestions = [...questions];

  isPracticeTest.value = type === "practice";
  currentQuizType.value = type;
  quizStartTime.value = Date.now();

  if (shuffle) {
    selectedQuestions = shuffleArray(selectedQuestions);
  }

  if (count < questions.length) {
    selectedQuestions = selectedQuestions.slice(0, count);
  }

  activeQuestions.value = selectedQuestions;
  quizStarted.value = true;
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  userAnswers.value = {};
  quizCompleted.value = false;
  showFeedback.value = false;

  saveQuizState();
};

const loadAndContinueQuiz = () => {
  console.log("Loading and continuing quiz...");
  const loaded = loadQuizState();
  if (loaded) {
    nextTick(() => {
      console.log("Quiz continued successfully");
    });
  } else {
    console.error("Failed to load saved quiz state");
  }
};

// Quiz interaction functions
const getSubmitButtonText = () => {
  if (isPracticeTest.value) {
    return currentQuestionIndex.value === activeQuestions.value.length - 1
      ? "Заврши"
      : "Следеће";
  } else {
    return "Провери одговор";
  }
};

const handleAnswerSubmit = () => {
  if (isPracticeTest.value) {
    nextQuestion();
  } else {
    checkAnswer();
    saveQuizState();
  }
};

const getOptionClass = (option) => {
  if (!showFeedback.value || isPracticeTest.value) return "";

  const correctOption = currentQuestion.value.options.find(
    (opt) => opt.isCorrect
  );
  const isCorrect = option.id === correctOption.id;
  const isSelected = option.id === selectedAnswer.value;

  if (isCorrect) {
    return "correct-answer";
  } else if (isSelected && !isCorrect) {
    return "incorrect-answer";
  }

  return "";
};

const checkAnswer = () => {
  showFeedback.value = true;
};

const nextQuestion = () => {
  userAnswers.value[currentQuestion.value.id] = selectedAnswer.value;

  if (currentQuestionIndex.value < activeQuestions.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswer.value = userAnswers.value[currentQuestion.value.id] || null;
    showFeedback.value = false;
    console.log("save quiz state inside next question");
    saveQuizState();
  } else {
    quizCompleted.value = true;
    saveQuizResult();
    clearQuizState();
    console.log("savedState inside next question", savedStateExists.value);
    savedStateExists.value = false;
    console.log(
      "savedState inside next question after finish",
      savedStateExists.value
    );
  }
};

const previousQuestion = () => {
  userAnswers.value[currentQuestion.value.id] = selectedAnswer.value;

  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    selectedAnswer.value = userAnswers.value[currentQuestion.value.id] || null;
    showFeedback.value = false;
  }

  console.log("save quiz state inside previous question");
  saveQuizState();
};

const restartQuiz = () => {
  quizStartTime.value = Date.now();
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  userAnswers.value = {};
  quizCompleted.value = false;
  showFeedback.value = false;

  saveQuizState();
};

const goToMenu = () => {
  quizStarted.value = false;
  quizCompleted.value = false;
  viewingQuizDetails.value = false;
  selectedQuizDetails.value = null;
};

// Result helper functions for current quiz
const getQuestionResultClass = (question) => {
  return isUserAnswerCorrect(question) ? "border-success" : "border-error";
};

const isUserAnswerCorrect = (question) => {
  const userAnswer = userAnswers.value[question.id];
  const correctOption = question.options.find((option) => option.isCorrect);
  return userAnswer === correctOption.id;
};

const getUserAnswerText = (question) => {
  const userAnswer = userAnswers.value[question.id];
  if (!userAnswer) return "Није одговорено";
  const selectedOption = question.options.find(
    (option) => option.id === userAnswer
  );
  return selectedOption ? selectedOption.text : "Непознат одговор";
};

const getCorrectAnswerText = (question) => {
  const correctOption = question.options.find((option) => option.isCorrect);
  return correctOption ? correctOption.text : "";
};

const getUserAnswerClass = (question) => {
  return isUserAnswerCorrect(question) ? "correct-text" : "incorrect-text";
};

// Helper functions for quiz history details
const getHistoryQuestionResultClass = (question) => {
  return isHistoryUserAnswerCorrect(question)
    ? "border-success"
    : "border-error";
};

const isHistoryUserAnswerCorrect = (question) => {
  const userAnswer = question.userAnswer;
  const correctOption = question.options.find((option) => option.isCorrect);
  return userAnswer === correctOption.id;
};

const getHistoryUserAnswerText = (question) => {
  const userAnswer = question.userAnswer;
  if (!userAnswer) return "Није одговорено";
  const selectedOption = question.options.find(
    (option) => option.id === userAnswer
  );
  return selectedOption ? selectedOption.text : "Непознат одговор";
};

const getHistoryCorrectAnswerText = (question) => {
  const correctOption = question.options.find((option) => option.isCorrect);
  return correctOption ? correctOption.text : "";
};

const getHistoryUserAnswerClass = (question) => {
  return isHistoryUserAnswerCorrect(question)
    ? "correct-text"
    : "incorrect-text";
};

// Debug functions
const clearAllSavedData = () => {
  if (process.client) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HISTORY_KEY);
    savedStateExists.value = false;
    console.log("All saved data cleared");
  }
};

const debugClearAll = () => {
  clearAllSavedData();
  location.reload();
};

// Mount function
onMounted(() => {
  console.log("onMounted: Starting to load quiz data");

  loadQuizHistory();

  const stateLoaded = loadQuizState();
  console.log("onMounted: State loaded:", stateLoaded);

  if (stateLoaded) {
    console.log("onMounted: Quiz completed status:", quizCompleted.value);
    console.log("onMounted: Quiz started status:", quizStarted.value);

    if (quizCompleted.value) {
      console.log("onMounted: Clearing completed quiz state");
      clearQuizState();
      // Don't call checkForSavedState() after clearing - the state should be false
    } else if (quizStarted.value) {
      console.log("onMounted: Quiz state restored from localStorage");
      // Only set savedStateExists to true if we have an active (non-completed) quiz
      savedStateExists.value = true;
    }
  } else {
    // No saved state found, ensure the flag is false
    savedStateExists.value = false;
  }
});

useHead({
  title: "Hill House - Quiz",
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

// Add quiz options as computed property for cleaner template
const quizOptions = computed(() => [
  {
    type: "practice",
    count: 20,
    shuffle: true,
    icon: mdiSchool,
    color: "primary",
    title: "Пробни тест",
    description: "20 насумично одабраних питања",
  },
  {
    type: "mixed",
    count: 99,
    shuffle: true,
    icon: mdiShuffleVariant,
    color: "success",
    title: isMobile.value ? "Измешана питања" : "Вежбање - измешана питања",
    description: isMobile.value
      ? "Свих 99 питања насумично"
      : "Свих 99 питања у случајном редоследу",
  },
  {
    type: "ordered",
    count: 99,
    shuffle: false,
    icon: mdiFormatListNumbered,
    color: "warning",
    title: isMobile.value
      ? "Питања у редоследу"
      : "Вежбање - питања у редоследу",
    description: "Свих 99 питања по редоследу",
  },
]);
</script>

<style scoped>
.v-card-title {
  word-break: break-word;
}

.v-radio {
  margin-bottom: 8px;
}

.correct-answer :deep(.v-label) {
  font-weight: bold !important;
  color: #4caf50 !important;
}

.incorrect-answer :deep(.v-label) {
  font-weight: bold !important;
  color: #f44336 !important;
}

.quiz-option-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
}

.quiz-option-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.quiz-option-card h4 {
  color: #333;
  font-weight: 600;
}

.quiz-option-card p {
  color: #666;
}

.correct-text {
  color: #4caf50;
  font-weight: bold;
}

.incorrect-text {
  color: #f44336;
  font-weight: bold;
}

.border-success {
  border-left: 4px solid #4caf50 !important;
}

.border-error {
  border-left: 4px solid #f44336 !important;
}

.border {
  border: 1px solid #e0e0e0;
}

.rounded {
  border-radius: 4px;
}

/* Mobile-specific styles */
@media (max-width: 600px) {
  .quiz-option-card {
    min-height: 120px;
  }

  .v-card-actions {
    gap: 8px;
  }

  .v-radio .v-selection-control {
    min-height: 44px;
  }

  .v-expansion-panel-text {
    padding: 8px !important;
  }
}

/* Touch-friendly sizing for mobile */
@media (max-width: 900px) {
  .v-btn {
    min-height: 44px;
  }

  .v-radio .v-selection-control {
    min-height: 44px;
  }
}
</style>
